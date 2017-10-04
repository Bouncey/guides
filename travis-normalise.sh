#!/usr/bin/env bash
# function to make a commit on a branch in a Travis CI build
# be sure to avoid creating a Travis CI fork bomb
# see https://github.com/travis-ci/travis-ci/issues/1701
#
# Thanks to @ddgenome for the gist
# https://gist.github.com/ddgenome/f3a60fe4c2af0cbe758556d982fbeea9
#
function travis-branch-commit() {
    if ! [ $TRAVIS_EVENT_TYPE = "pull_request" ]; then
        err "Not a PR, this is a $TRAVIS_EVENT_TYPE"
        return 0
    fi
    # normalise articles
    node bin/normaliseArticles
    if [[ `git status --porcelain` ]]; then
        # changes
        add-commit-push
    else
        msg "No changes to commit"
        return 0
    fi
}

function add-commit-push() {
    local remote=https://github.com/$(TRAVIS_REPO_SLUG).git
    local BRANCH
    if ! git fetch --unshallow; then
        err "failed to convert to a full clone"
        return 1
    fi
    if ! git checkout $TRAVIS_BRANCH; then
        err "failed to checkout $TRAVIS_BRANCH"
        return 1
    fi
    if ! git add --all .; then
        err "failed to stage modified files"
        return 1
    fi
    # make Travis CI skip this build
    if ! git commit -m "Travis CI has normalised some articles"; then
        err "failed to commit updates"
        return 1
    fi
    if ! git push --quiet "$remote" "$TRAVIS_BRANCH" > /dev/null 2>&1; then
        err "failed to push git changes"
        return 1
    fi
}

function msg() {
    echo "travis-normaliser: $*"
}

function err() {
    msg "$*" 1>&2
}

travis-branch-commit
