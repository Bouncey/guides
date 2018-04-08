webpackJsonp([0xa7dadff4e4e3],{4137:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>Puppet</h2>\n<p>Puppet is a configuration management tool that allows you to automate the configuration and management of your infrastructure. This helps you save time by automating repetitive tasks and ensuring your systems are kept in a desired state.</p>\n<p>Puppet comes in two varieties, Puppet Enterprise and open source Puppet. The supported platforms include most Linux distributions, various UNIX platforms, and Windows.</p>\n<p>Puppet was developed by <a href="https://puppet.com/company">Puppet Labs</a>.</p>\n<h3>Getting Started</h3>\n<p>You can configure your infrastructure either in a client/server architecture or in a stand-alone architecture. The former uses the Puppet <code>agent</code> and the Puppet <code>master</code> applications, while the latter uses the Puppet <code>apply</code> aplication.</p>\n<h4>Agent/Master Architecture</h4>\n<p>In this architecture one or more nodes run the Puppet master application. The master servers control the configuration information of the complete infrastructure.</p>\n<p>Managed nodes run the Puppet agent application as a background service, and periodically request their configuration <code>catalog</code> from the Puppet master(s). </p>\n<p>The Puppet master compiles and returns each nodes catalog, using multiple sources of information. This gathered information is know as <code>facts</code>.</p>\n<p>Once a Puppet agent receives a catalog, it checks each resource described in it. If a resource is not in the desired state, the agent corrects it.</p>\n<h4>Stand-Alone Architecture</h4>\n<p>In this architecture each managed node has the copy of the complete configuration.</p>\n<p>Each Puppet agent runs the apply application as a scheduled task or cron job. </p>\n<p>As in the agent/master architecture, the Puppet apply compiles the catalog and checks each described resource. If a resource is not in the desired state, Puppet apply will correct it.</p>\n<p>Like the Puppet master application, Puppet apply needs access to several sources of configuration data, which it uses to compile a catalog for the node it is managing.</p>\n<h4>Catalog</h4>\n<p>A catalog is a document that specifies the configuration of a machine. It lists all the resources that need to be managed, their desired state, and any dependencies between them.</p>\n<p>Puppet configures a system by first compiling a catlog and then applying it.</p>\n<h4>Facts</h4>\n<p>Puppet gathers facts about all the nodes with a tool called <code>facter</code>. Facter gathers the information needed to configure the system. For instance, hostnames, IP addresses, OS names, among others. However, it is also possible to add additional facts.</p>\n<p>For more information, see the documentation for the Puppet architecture.</p>\n<h4>More Information:</h4>\n<ul>\n<li>Puppet official <a href="https://puppet.com">website</a></li>\n<li>An overview of the Puppet <a href="https://puppet.com/docs/puppet/5.3/architecture.html">architecture</a></li>\n<li>How To Use Puppet to Manage Your Servers. A series of tutorials from <a href="https://www.digitalocean.com/community/tutorial_series/how-to-use-puppet-to-manage-your-servers-2">DigitalOcean</a></li>\n</ul>',fields:{slug:"/developer-tools/puppet/"},frontmatter:{title:"Puppet"}}},pathContext:{slug:"/developer-tools/puppet/"}}}});
//# sourceMappingURL=path---developer-tools-puppet-abe46678c7b8431f67fd.js.map