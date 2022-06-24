+++
title = "Storing and managing dotfiles"
description = "Using stow and some magic"
date=2022-06-22
[taxonomies] 
categories = ["Post"]
tags = ["dotfiles"] 
+++

# Storing and managing dotfiles

After messing around and customizing my Arch Linux installation, I wanted a way of reproducing the same aesthetic and configuration on any computer when needed.
This meant I had to start managing and backing up my dotfiles. After scouring the internet, I came across 
[GNU Stow](https://www.gnu.org/software/stow/) - a symlink farm manager. It can create symlinks easily. So I made a repository called `.dotfiles`
where I stored my dots. This was really cool as I could clone it to my home dir and run `stow *` and magically I would have my configs.

However I took it one step further and wrote a little script that gave me much more power, essentially being able to manage multiple different
configurations at once and being able to switch between them effortlessly. You can check it out [here](/projects/arch-config/).

A use case for this would be if you use multiple window managers or multiple different linux distributions it is very easy to configure them once
and use them again. Overall I have learnt to deploy my configurations to any computer/VM, which makes my life a lot easier and saves me a lot of time.
