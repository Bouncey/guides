webpackJsonp([0x9bab874348ed],{5724:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>Packets</h2>\n<p>A packet is a basic unit of communication over a digital network. A packet is also called a <strong>datagram, a segment, a block, a cell or a frame,</strong> depending on the protocol used for the transmission of data. When data has to be transmitted, it is broken down into similar structures of data before transmission, called packets, which are reassembled to the original data chunk once they reach their destination.</p>\n<p>Packet switched networks are generally more efficient compared to circuit switched networks. Circuit switched network needs to reserve resources for the duration of communication. Packet switched networks can send packets on demand.</p>\n<p>In the OSI model, packets correspond to layer 3, the Network Layer.</p>\n<h2>Structure of a Data Packet</h2>\n<p>  The structure of a packet depends on the type of packet it is and on the protocol. Read further below on packets and protocols. Normally, a packet has a header and a payload.</p>\n<p>  The header keeps overhead information about the packet, the service, and other transmission-related data. For example, data transfer over the Internet requires breaking down the data into IP packets, which is defined in IP (Internet Protocol), and an IP packet includes:</p>\n<ul>\n<li>The source IP address, which is the IP address of the machine sending the data.</li>\n<li>The destination IP address, which is the machine or device to which the data is sent.</li>\n<li>The sequence number of the packets, a number that puts the packets in order such that they are reassembled in a way to get the original data back exactly as it was prior to transmission.</li>\n<li>The type of service.</li>\n<li>Flags.</li>\n<li>Some other technical data.</li>\n<li>The payload, which represents the bulk of the packet (all the above is considered as overhead), and is actually the data being carried.</li>\n</ul>\n<h2>Packets and Protocols</h2>\n<p>  Packets vary in structure and functionality depending on the protocols implementing them. VoIP uses the IP protocol, and hence IP packets. On an Ethernet network, for example, data is transmitted in Ethernet frames.</p>\n<p>  In the IP protocol, the IP packets travel over the Internet through nodes, which are devices and routers (technically called nodes in this context) found on the way from the source to the destination.</p>\n<p>  Each packet is routed towards the destination based on its source and destination address. At each node, the router decides, based on calculations involving network statistics and costs, to which neighboring node it is more efficient to send the packet.</p>\n<p>  This selected node is more efficient to send the packet. This is part of packet switching which actually flushes the packets on the Internet and each of them finds its own way to the destination. This mechanism uses the underlying structure of the Internet for free, which is the main reason for which VoIP calls and Internet calling are most free or very cheap.</p>\n<p>  Contrary to traditional telephony where a line or circuit between the source and destination has to be dedicated and reserved (called circuit switching), hence the heavy cost, packet switching exploits existing networks for free.</p>\n<p>  Another example is the TCP (Transmission Control Protocol), which works with IP in what we call the TCP/IP suite. TCP is responsible for ensuring that data transfer is reliable. To achieve that, it checks whether the packets have arrived in order, whether any packets are missing or have been duplicated, and whether there is any delay in packet transmission. It controls this by setting a timeout and signals called acknowledgments.</p>\n<h2>Conclusion</h2>\n<p>  Data travels in packets over digital networks and all of the data we consume, whether it be text, audio, images or video, come broken down into packets which are reassembled in our devices or computers. This is why, for instance, when a picture loads over a slow connection, you see chunks of it appearing one after the other. </p>\n<h4>More Information:</h4>\n<!-- Please add any articles you think might be helpful to read before writing the article -->\n<p><a href="https://www.lifewire.com/what-is-a-data-packet-3426310" title="Lifewire&#x27;s Article about Data Packets">All Networking concepts in brief details</a></p>',fields:{slug:"/network-engineering/packets/"},frontmatter:{title:"Packets"}}},pathContext:{slug:"/network-engineering/packets/"}}}});
//# sourceMappingURL=path---network-engineering-packets-3960a13679e9d9f2c3e3.js.map