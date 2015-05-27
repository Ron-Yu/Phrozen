


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>pixelcog/parallax.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="pixelcog/parallax.js" name="twitter:title" /><meta content="parallax.js - Simple parallax scrolling effect inspired by Spotify.com implemented as a jQuery plugin" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/4433648?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/4433648?v=3&amp;s=400" property="og:image" /><meta content="pixelcog/parallax.js" property="og:title" /><meta content="https://github.com/pixelcog/parallax.js" property="og:url" /><meta content="parallax.js - Simple parallax scrolling effect inspired by Spotify.com implemented as a jQuery plugin" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="76A3536D:1B17:7DFC40:5527734E" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, files#disambiguate" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="A+9t0ZhYKmKtCXyJZ9unDK05hC6vr9g+p0jXQAi3eF4MLuXH5/4RVmhM1AXgfRtuQiGF1pMKVgsjZYgnxlh4iw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-6a4174aa7e25ce4268078491fdfa22273eef841d99e1ab07ccce9b89c747f55d.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-5b5e999e041f2586f9dc06b940229076225e6ec5ab5406be292a87331325fdc0.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="8ef4cce20ae9cf017054cfeff04ce121">

      
  <meta name="description" content="parallax.js - Simple parallax scrolling effect inspired by Spotify.com implemented as a jQuery plugin">
  <meta name="go-import" content="github.com/pixelcog/parallax.js git https://github.com/pixelcog/parallax.js.git">

  <meta content="4433648" name="octolytics-dimension-user_id" /><meta content="pixelcog" name="octolytics-dimension-user_login" /><meta content="20625687" name="octolytics-dimension-repository_id" /><meta content="pixelcog/parallax.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="20625687" name="octolytics-dimension-repository_network_root_id" /><meta content="pixelcog/parallax.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/pixelcog/parallax.js/commits/master.atom" rel="alternate" title="Recent Commits to parallax.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        
        <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fpixelcog%2Fparallax.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/pixelcog/parallax.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/pixelcog/parallax.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fpixelcog%2Fparallax.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/pixelcog/parallax.js/watchers">
    19
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fpixelcog%2Fparallax.js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/pixelcog/parallax.js/stargazers">
      276
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fpixelcog%2Fparallax.js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/pixelcog/parallax.js/network" class="social-count">
        108
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/pixelcog" class="url fn" itemprop="url" rel="author"><span itemprop="title">pixelcog</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/pixelcog/parallax.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">parallax.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/pixelcog/parallax.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/pixelcog/parallax.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /pixelcog/parallax.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/pixelcog/parallax.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /pixelcog/parallax.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/pixelcog/parallax.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /pixelcog/parallax.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/pixelcog/parallax.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /pixelcog/parallax.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/pixelcog/parallax.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /pixelcog/parallax.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/pixelcog/parallax.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/pixelcog/parallax.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" data-copy-hint="Copy to clipboard" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>




                <a href="/pixelcog/parallax.js/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of pixelcog/parallax.js as a zip file"
                   title="Download the contents of pixelcog/parallax.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      Simple parallax scrolling effect inspired by Spotify.com implemented as a jQuery plugin
    </div>



</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/pixelcog/parallax.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              38
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/pixelcog/parallax.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            2
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/pixelcog/parallax.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            10
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/pixelcog/parallax.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      5
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/pixelcog/parallax.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 100%" style="width:100%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
  </div>

<include-fragment src="/pixelcog/parallax.js/show_partial?partial=recently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">
  <a href="/pixelcog/parallax.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/pixelcog/parallax.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-se left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/pixelcog/parallax.js/tree/gh-pages"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/pixelcog/parallax.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v1.3.2"
                 data-name="v1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.2">v1.3.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v1.3.1"
                 data-name="v1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.1">v1.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v1.3"
                 data-name="v1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3">v1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v1.2.1"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v1.2"
                 data-name="v1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2">v1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v1.1"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v1.0.1"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v1.0"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v0.9.1"
                 data-name="v0.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.1">v0.9.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/pixelcog/parallax.js/tree/v0.9"
                 data-name="v0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9">v0.9</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pixelcog/parallax.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">parallax.js</span></a></span></span><span class="separator">/</span>
    <a class="btn-link disabled tooltipped tooltipped-e" href="#" aria-label="You must be signed in to make or propose changes">
      <span class="octicon octicon-plus"></span>
    </a>
</div>
</div>



  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/pixelcog/parallax.js/commit/6f9b3b3ed54a7e0a4bbf95f02b8ae5f8b7ccd76d" class="message" data-pjax="true" title="bump release version">bump release version</a>
        
    </p>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="6f9b3b3ed54a7e0a4bbf95f02b8ae5f8b7ccd76d" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/pixelcog/parallax.js/commit/6f9b3b3ed54a7e0a4bbf95f02b8ae5f8b7ccd76d" class="sha-block" data-pjax>latest commit <span class="sha">6f9b3b3ed5</span></a>

      <div class="authorship">
        <img alt="Mike Greiling" class="avatar" data-user="812328" height="20" src="https://avatars3.githubusercontent.com/u/812328?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/mikegreiling" rel="contributor">mikegreiling</a></span>
        authored <time class="updated" datetime="2015-03-04T17:38:22Z" is="relative-time">Mar 4, 2015</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pixelcog/parallax.js/blob/master/LICENSE" class="js-directory-link" id="9879d6db96fd29134fc802214163b95a-b918de6411b3b77f96d1f192454d7f7d05970eb1" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/pixelcog/parallax.js/commit/58515f51e1b5cfb220704d3fbb1a805bc23bb0b0" class="message" data-pjax="true" title="update copyright date in LICENSE file">update copyright date in LICENSE file</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-02-25T19:04:06Z" is="time-ago">Feb 25, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pixelcog/parallax.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-680f6f0fa1ee72bcfcff9412a232e1f049139f4b" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/pixelcog/parallax.js/commit/af6d14c6195148e6aca029e0b73406c9e60278c3" class="message" data-pjax="true" title="include note about the necessity of manually triggering a refresh when manipulating the DOM (ref issue #23 and issue #34)">include note about the necessity of manually triggering a refresh whe…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-02-26T04:44:57Z" is="time-ago">Feb 25, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pixelcog/parallax.js/blob/master/bower.json" class="js-directory-link" id="0a08a7565aba4405282251491979bb6b-bd8b2135e559c4a2cfc805eaed8eab0921f9d97e" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/pixelcog/parallax.js/commit/6f9b3b3ed54a7e0a4bbf95f02b8ae5f8b7ccd76d" class="message" data-pjax="true" title="bump release version">bump release version</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-03-04T17:38:22Z" is="time-ago">Mar 4, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pixelcog/parallax.js/blob/master/parallax.js" class="js-directory-link" id="d12d50eb32c4f4f5b7f0b452fb738bb0-2dc25cbdea500445ab8c8e626770ed7d34ad0ce3" title="parallax.js">parallax.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/pixelcog/parallax.js/commit/61112f48c85ac02d3425266064f6924c88395d3e" class="message" data-pjax="true" title="reverse event definition order so they are triggered in the correct order on &quot;load&quot;">reverse event definition order so they are triggered in the correct o…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-02-26T01:37:09Z" is="time-ago">Feb 25, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/pixelcog/parallax.js/blob/master/parallax.min.js" class="js-directory-link" id="0a7aafe13776ecd078006078a297e9e5-018b6fdc70ce5b798385b7866596c6032a474eaa" title="parallax.min.js">parallax.min.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/pixelcog/parallax.js/commit/61112f48c85ac02d3425266064f6924c88395d3e" class="message" data-pjax="true" title="reverse event definition order so they are triggered in the correct order on &quot;load&quot;">reverse event definition order so they are triggered in the correct o…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-02-26T01:37:09Z" is="time-ago">Feb 26, 2015</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-parallaxjs" class="anchor" href="#parallaxjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Parallax.js</h1>

<p>Simple parallax scrolling effect inspired by <a href="http://spotify.com/">Spotify.com</a> implemented as a jQuery plugin<br>
<a href="http://pixelcog.com/parallax.js/">http://pixelcog.com/parallax.js/</a></p>

<h2>
<a id="user-content-installation" class="anchor" href="#installation" aria-hidden="true"><span class="octicon octicon-link"></span></a>Installation</h2>

<p>Download and include <code>parallax.min.js</code> in your document after including jQuery.</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;
&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>/path/to/parallax.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>

<h2>
<a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Usage</h2>

<h3>
<a id="user-content-via-data-attributes" class="anchor" href="#via-data-attributes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Via data attributes</h3>

<p>To easily add a parallax effect behind an element, add <code>data-parallax="scroll"</code> to the element you want to use, and specify an image with <code>data-image-src="/path/to/image.jpg"</code>.</p>

<div class="highlight highlight-html"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>parallax-window<span class="pl-pds">"</span></span> <span class="pl-e">data-parallax</span>=<span class="pl-s"><span class="pl-pds">"</span>scroll<span class="pl-pds">"</span></span> <span class="pl-e">data-image-src</span>=<span class="pl-s"><span class="pl-pds">"</span>/path/to/image.jpg<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">div</span>&gt;</pre></div>

<h3>
<a id="user-content-via-javascript" class="anchor" href="#via-javascript" aria-hidden="true"><span class="octicon octicon-link"></span></a>Via JavaScript</h3>

<p>To call the parallax plugin manually, simply select your target element with jQuery and do the following:</p>

<div class="highlight highlight-javascript"><pre>$(<span class="pl-s"><span class="pl-pds">'</span>.parallax-window<span class="pl-pds">'</span></span>).parallax({imageSrc<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/path/to/image.jpg<span class="pl-pds">'</span></span>});</pre></div>

<h3>
<a id="user-content-notes" class="anchor" href="#notes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Notes</h3>

<p>What parallax.js will do is create a fixed-position element for each parallax image at the start of the document's body. This mirror element will sit behind the other elements and match the position and dimensions of its target object.</p>

<p>Due to the nature of this implementation, you must ensure that these parallax objects and any layers below them are transparent so that you can see the parallax effect underneath.  Also, if there is no other content in this element, you will need to ensure that it has some fixed dimensions otherwise you won't see anything.</p>

<div class="highlight highlight-css"><pre><span class="pl-e">.parallax-window</span> {
    <span class="pl-c1"><span class="pl-c1">min-height</span></span>: <span class="pl-c1">400<span class="pl-k">px</span></span>;
    <span class="pl-c1"><span class="pl-c1">background</span></span>: <span class="pl-c1">transparent</span>;
}</pre></div>

<p>Also, keep in mind that once initialized, the parallax plugin presumes a fixed page layout unless it encounters a <code>scroll</code> or <code>resize</code> event.  If you have a dynamic page in which another javascript method may alter the DOM, you must manually refresh the parallax effect with the following commands:</p>

<div class="highlight highlight-javascript"><pre>jQuery(<span class="pl-c1">window</span>).trigger(<span class="pl-s"><span class="pl-pds">'</span>resize<span class="pl-pds">'</span></span>).trigger(<span class="pl-s"><span class="pl-pds">'</span>scroll<span class="pl-pds">'</span></span>);</pre></div>

<h2>
<a id="user-content-options" class="anchor" href="#options" aria-hidden="true"><span class="octicon octicon-link"></span></a>Options</h2>

<p>Options can be passed in via data attributes of JavaScript.  For data attributes, append the option name to <code>data-</code>, as in <code>data-image-src=""</code>.</p>

<p>Note that when specifying these options as html data-attributes, you should convert "camelCased" variable names into "dash-separated" lower-case names (e.g. <code>zIndex</code> would be <code>data-z-index=""</code>).</p>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>type</th>
            <th>default</th>
            <th>description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>imageSrc</td>
            <td>path</td>
            <td>null</td>
            <td>You must provide a path to the image you wish to apply to the parallax effect.</td>
        </tr>
        <tr>
            <td>naturalWidth</td>
            <td>number</td>
            <td>auto</td>
            <td rowspan="2">You can provide the natural width and natural height of an image to speed up loading and reduce error when determining the correct aspect ratio of the image.</td>
        </tr>
        <tr>
            <td>naturalHeight</td>
            <td>number</td>
            <td>auto</td>
        </tr>
        <tr>
            <td>position</td>
            <td>xPos yPos</td>
            <td>center center</td>
            <td rowspan="3">This is analogous to the background-position css property. Specify coordinates as top, bottom, right, left, center, or pixel values (e.g. -10px 0px). The parallax image will be positioned as close to these values as possible while still covering the target element.</td>
        </tr>
        <tr>
            <td>positionX</td>
            <td>xPos</td>
            <td>center</td>
        </tr>
        <tr>
            <td>positionY</td>
            <td>yPos</td>
            <td>center</td>
        </tr>
        <tr>
            <td>speed</td>
            <td>float</td>
            <td>0.2</td>
            <td>The speed at which the parallax effect runs. 0.0 means the image will appear fixed in place, and 1.0 the image will flow at the same speed as the page content.</td>
        </tr>
        <tr>
            <td>zIndex</td>
            <td>number</td>
            <td>-100</td>
            <td>The z-index value of the fixed-position elements.  By default these will be behind everything else on the page.</td>
        </tr>
        <tr>
            <td>bleed</td>
            <td>number</td>
            <td>0</td>
            <td>You can optionally set the parallax mirror element to extend a few pixels above and below the mirrored element.  This can hide slow or stuttering scroll events in certain browsers.</td>
        </tr>
        <tr>
            <td>iosFix</td>
            <td>boolean</td>
            <td>true</td>
            <td>iOS devices are incompatable with this plugin. If true, this option will set the parallax image as a static, centered background image whenever it detects an iOS user agent. Disable this if you wish to implement your own graceful degradation.</td>
        </tr>
        <tr>
            <td>androidFix</td>
            <td>boolean</td>
            <td>true</td>
            <td>If true, this option will set the parallax image as a static, centered background image whenever it detects an Android user agent. Disable this if you wish to enable the parallax scrolling effect on Android devices.</td>
        </tr>
        <tr>
            <td>overScrollFix</td>
            <td>boolean</td>
            <td>false</td>
            <td>(Experimental) If true, will freeze the parallax effect when "over scrolling" in browsers like Safari to prevent unexpected gaps caused by negative scroll positions.</td>
        </tr>
    </tbody>
</table>

<h2>
<a id="user-content-contributing" class="anchor" href="#contributing" aria-hidden="true"><span class="octicon octicon-link"></span></a>Contributing</h2>

<p>If you have a pull request you would like to submit, please ensure that you update the minified version of the library along with your code changes.  This project uses <a href="https://www.npmjs.com/package/uglify-js">uglifyjs</a> to perform code compression.</p>

<p>Please use the following command:</p>

<pre><code>uglifyjs parallax.js --comments -m -c -o parallax.min.js
</code></pre>

<h1>
<a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><span class="octicon octicon-link"></span></a>LICENSE</h1>

<p>The MIT License (MIT)</p>

<p>Copyright (c) 2015 PixelCog Inc.</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</p>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.03017s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2c8ae50712a47d2b83d740cb875d55cdbbb3fdbccf303951cc6b7e63731e0c38.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-a8298930bc879205b7c77472e37c8bbc58da94d4b7c970cd899dfe0b65289591.js"></script>
      
      

  </body>
</html>

