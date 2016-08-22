---
layout: post
title:  "Create a GitHub repository from the command line"
categories: Terminal Guides
author: Harry
---

To create a GitHub repository, open up terminal and type;

{% highlight git bash %}
curl -u USERNAME https://api.github.com/user/repos -d '{ "name": "REPO_NAME" }''
{% endhighlight %}

Change USERNAME to your GitHub username and change REPO_NAME to your desired repository name!