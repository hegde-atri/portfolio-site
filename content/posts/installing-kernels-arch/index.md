+++
title = "Installing kernels in Arch Linux"
description = "How to install the zen kernel for arch linux."
date=2022-06-29
[extra]
toc = true
[taxonomies]
categories = ["Post", "Guide"]
tags = ["Arch Linux", "Kernel"]
+++

# Installing kernels in Arch Linux

Messing around with gaming on linux, I found out that CS:GO, Team Fortress 2, and any games that used
the source engine were particularly laggy. This issue seems to be fixed when I use the zen kernel. I will walk
you through installing the zen kernel on Arch Linux.

## Getting the required modules

We will need to install the kernel itself.

```sh
sudo pacman -S linux-zen linux-zen-headers
```

If you are using a nvidia graphics card, replace your nvidia (drivers) package with nvidia-dkms package.

```sh
sudo pacman -S dkms nvidia-dkms
```

## Modifying GRUB

Now we are gonna change the grub config to make it easier to use with multiple kernels.
Lets open the grub config file using `sudo vim /etc/default/grub`.
Now modify the following properties (`GRUB_DEFAULT=saved` needs to added, isn't already present)


```sh
GRUB_DEFAULT=saved
GRUB_SAVEDDEFAULT=true
GRUB_DISABLE_SUBMENU=y
```

Then to apply the changes regenerate your grub config using:

```sh
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

*The location of your grub config might vary!*

Now you should be able to restart your computer and boot into your machine with the linux-zen kernel!
Souce engine based games seem to run much better now and the [zen-kernel](https://github.com/zen-kernel/zen-kernel) is
supposed to better for day to day use.

### Issues

- booting/logging in to a black screen: run `mkinitcpio -P`

