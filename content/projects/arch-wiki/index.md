+++
title = "Arch Linux Wiki"
description = "This project is undergoing major changes, it will be back up in about 3-4 weeks."
#description = "Another Arch Linux wiki to help you get started."
date=2022-06-21
[extra]
toc = true
[taxonomies]
categories = ["Linux"]
tags = ["Arch Linux"]
+++

# This project is undergoing major changes, will be back up in about 3-4 weeks

## Changes
- improved spelling, fixing grammatical errors.
- Much better structure and headings to make it easier to use and navigate.
- There will be a copy here but also github docs page once complete.

Navigate through this page/guide using the table of contents on the right.

# Installation

## Dual booting

`powercfg /h off` - Run this command (in windows) to disable hibernation completely. This gets rid of hybrid boot, which can cause your hard drive to be read-only.

# Configuration

## AUR helper

## NetworkManager

## Bluetooth

## Advanced

## Theming

- Use the `lxappearance` package to manage gtk themes. You might want to install `arc-gtk-theme`.
- Use the `qt5ct` package to manage qt themes.You need to add `QT_QPA_PLATFORMTHEME=qt5ct` to `/etc/environment` and re-login/reboot. You might want to install `breeze`.

## Changing keyboard layout

To change your keyboard layout in Xorg, you will need to modify/create `/etc/X11/xorg.conf.d/00-keyboard.conf`.
Here is an example for switching to the UK layout.
```conf
Section "InputClass"
        Identifier "system-keyboard"
        Option "XkbLayout" "gb"
        Option "XkbModel" "pc104"
EndSection
```


### Services
A service is a program that runs in the background

#### Some commands
- `sudo systemctl start <service_name>`: to start a service
- `sudo systemctl enable --now <service_name>`: starts the service but also makes sure it is running when you turn your computer on / log in. If you don't need the service to run/start right now, you can omit the `--now` flag.
- `sudo systemctl stop <service_name>`: to stop a running service.
- `sudo systemctl disable <service_name>:` Stop a service from running on startup.

#### Some commands that are useful for debegging:
- `sudo systemctl | grep running` : see all the services that are running.
- `sudo systemctl list-unit-files | grep enabled`: see the enabled services


# Applications


## Using a WM

Some application such as JetBrains IDE's don't work properly on window managers. To fix this
run this command, or add it to your autostart file.

```sh
export _JAVA_AWT_WM_NONREPARENTING=1
export AWT_TOOLKIT=MToolkit
wmname LG3D
```

## Running windows applications
### Microsoft and Adobe apps
I use winapps to run Microsoft Office, Visual studio and Adobe creative cloud apps.
For this refer to the [winapps repository](https://github.com/Fmstrat/winapps). 

### Running Standalone 'exe' files
For running any small applications, I use bottles which is available in flathub [here](https://flathub.org/apps/details/com.usebottles.bottles).

# Terminal and bash scripting

## Commands

- `ls`: lists subdirectories or files in your current directory
- `pwd`: gives your current directory
- `cat <file>`: Outputs the contents of the file onto the terminal. Used to look at the contents of a file without opening it.
- `cd <target_directory>`: Changes your current directory to the the specified target directory. The target directory must be in your current working folder/directory. You can check this by typing the `ls` command.
- `grep "<string>" <file>` : This is the most basic usage of grep, for more flags/options, see [here](https://www.man7.org/linux/man-pages/man1/grep.1.html) and [here](https://www.howtogeek.com/496056/how-to-use-the-grep-command-on-linux/). Some usage flags include: `-i` : ignore case, `-H` : with file name (prints file name where each match is found), `-L` stops at first match.
- `touch <file>`: can be used to create a file in the current working directory, or in the directory provided like this -> `touch <path_to_file>`.
- `sed` : Extremely powerful tool, Sed, the ultimate stream editor. We can substitute words(like find and replace tool) using regex and so much more. Some examples would be:

```sh
sed -i 's/old/new/g' file
```

This would replace "old" with "new" for all occurrence's in file. For information on sed can be found [here](https://www.grymoire.com/Unix/Sed.html).
- `<command1>|<command2>`: The pipe command transfers the output of a given command (Here output of command1 is transferred to command2). For example if I wanted to transfer
- `>`  and `>>`:  The  '>' operator overwrites the existing file, or creates the file if file mentioned cannot be found. The '>>' operator appends to the existing file, or creates the file if file does not exist. See script below. Usage of the operators would be :`{command_with_output} > file` . Here is an example of a simple shell script.
```sh
#!/usr/bin/bash
# This is script I wrote that will append the given data to the file logger.md
echo -n "Enter line to be appended: "
read userinput
echo "$userinput" >> ~/Documents/logger.md
```

## Bash scripting

Basic shell script examples.

The first script takes your height and appends to a height tracking markdown file. The first line `#!/bin/bash` indicates
that it is a bash script.

```sh
#!/bin/bash
# takes input
echo -n "Enter height: "
read height
currentDate=`date +"%d/%m/%Y"`
# The output must be in table format in markdown
echo "| $currentDate | $height |" >> ~/Documents/heightLogger.md
```

Or we could have it take one argument

```sh
#!/bin/bash
currentDate=`date +"%d/%m/%Y"`
# The output must be in table format in markdown
echo "| $currentDate | $1 |" >> ~/Documents/heightLogger.md
```

Now we can add some additional checks to it

```sh
#!/bin/bash

if [ -z $1 ]; then
	echo "First argument required (your height)"
else
	currentDate=`date +"%d/%m/%Y"`
	# The output must be in table format in markdown
	echo "| $currentDate | $1 |" >> ~/Documents/heightLogger.md
fi
```

Now we can set an alias or make our file and executable to use it.

TODO
