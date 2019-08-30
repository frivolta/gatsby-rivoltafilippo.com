---
title: Useful git commands for everyday use every beginner front-end developer should know 2019
date: '2019-08-30'
cover: './preview.jpg'
tags: ['git', 'tools', 'workflow']
---

**Git** is a service control software, and it lets you **track your files over-time**. You will easily find yourself in the situations where you or one of your colleagues screw things up in your code, and you want to get back to the **last working version of your software**. You probably have already your service control system: think about it, how many times did you save your file using names like *"final", "final_final", "super-latest_final",* this is because you need to keep track of your changes and git help to do it in a better fancy way.

Things like: *backup and restore, synchronization, undo, track changes, sandboxing, branching,* and *merging* are easily managed through  Git. 

When it comes to Git, I found it very difficult in the early days to find a concise explanation of what this software is capable of, and how to use it. After this article, you will have an understanding of **primary Git usage and commands**. 

*Since this article is written for a basic understanding, you will find on this website in the following days a more in-depth explanation of everyday commands you will need to know to work in a team of developers such as diff, log amend, rebase... so be sure to stay tuned and to subscribe to the newsletter at the end of this page.*

## Configure Git ##

So  first thing first, after installing Git, you will need to **configure your credentials globally:**
```
git config --global user.name "John Doe"
git config --global user.email john.doe@example.com
```
## Initialize a repository ##
You can now start using Git for tracking your changes, to **initialize a repository,** inside your project folder only:

```
git init
```

## Status ##
Since now your repository is initialized you can now check the status of your files with:
```
git status
```
Locally your git files could be in either on one of these three states:

- Staged

- Committed

- Modified

Staged files are files added to **the index of your repo**, to understand better what this means, take a look at the graphs below:

(GRAPHICS)

After you modify your files, you want to add them to the **staging area**, which is a place you want to store them **before committing them**. Committing files let you create a **snapshot** of them and **save them to the local database**. Files are modified if you made some changes to them, but they are not yet committed. Let's take a look at some commands...

Staging files is done by using the *"add"*:

```
git add file1 file2 file3
```

you can add all modified files to the staging area using:

```
git add .
```

Simple right?! Well but what if you made a mistake and want to **unstage staged files?** You can use the *"rm"* command:

```
git -rm --cached file1 file2 file3
```
to remove folders remember to add the "-r" parameter:

```
git -rm --cached -r folder name
```

Remember you can use indicate you want to remove all files and folders using the "." sign:

```
git -rm --cached -r .
```
## Committing your changes ##
To take a live snapshot of your current staging area, you will want to commit the files using an explicative message:

```
git commit -m "Initial commit"
```
We have talked about the staging area, but what is it exactly? This has always confused me in the beginning, here's both a repo, *"object database"*, and a staging area, called *"index"*.  To give you a better understanding, I made a simple schema to help you visualize what we have talked so far:

GRAPHIC COMPLETE WITHOUT MASTER

## Pushing online your committed files ##

Now, we have our local repo, but we want to **share our work** with our team,the entire world, or have an online repository for personal use. My advice is to signup for one of those two most used services:** GitHub**, **Bitbucket**. Both of them are free and let you have private repositories in their free tier. Once you logged in you want to **create a repository**, it is a pretty straightforward step, once you have done it you want to create a connection from your local repository to the remote one:

```
git remote add origin https://www.github.com/repository-name
```
You can now **push committed local changes to the remote server** using:
```
git push origin master
```
If you want to see **changes others have made**, but that are not in your local repo you can use:
```
git fetch origin
```
this see what file has been modified, but it **doesn't merge it in your local repository**, to do it just:
```
git pull origin master
```
To summarize what we have talked so far take a look at this picture:
FINAL SCHEMA

## Other useful commands ##
There are tons of git commands, but the following are extremely useful:
```
git diff
```
let you see **all the changes made in the git repo**, this command mark with *"+++"* files with additions and *"---"* files with removals.

To see all of the **git history**, you can use the following command:
```
git log
```

## To summarize ##
If you have followed the steps above, you should now have a **better understanding of what Git is and why it is useful**, plus you can make a simple git **workflow on your own**.

*In the next article, we will talk about more in-depth git commands, be sure to stay up to date subscribing to the newsletter in the box at the end of the page, no spam here I promise. Plus if you liked the article or you have any questions leave a comment!*

You can take a look at all git commands by using the official git cheatsheet:
CHEATSHEET BY GIT
or explore more advanced topics using the "Git handbook".
GIT HANDBOOK

## Fancy Tip ##
Who said Git should be boring, **give your git messages a decorative look** adding an emoji before the comment, you can manually add icons to your words adding the ":iconname:" sign or you can use a useful VSCode extension called Git Moji. Take a look at this screenshot:

GITMOJI SCREENSHOT