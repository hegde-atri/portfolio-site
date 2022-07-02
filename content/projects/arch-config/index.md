+++
title = "Linux config script"
description = "Guide to managing dotfiles using my script"
date=2022-06-21
[extra]
toc = true
[taxonomies]
categories = ["Linux"] 
tags = ["Arch Linux"]
+++

# [My dotfiles script](https://github.com/hegde-atri/.dotfiles)

After starting make multiple configs for multiple use cases, computers/VM's
I've decided to make myself a script that allows me to switch between my configs,
create a new config, or update a config all without the trouble of managing them manually.

After scripting my [arch-install](/projects/arch-install/) I've gotten a lot more
comfortable with bash scripting, although I wouldn't bet on the quality its written in, as there is no 
error checking or validation.

Clone me: `git clone https://github.com/hegde-atri/.dotfiles ~/.source/dotfiles`

## Usage

- First run the firstrun.sh script `./firstrun.sh`. This installs any required fonts and packages.
- Then you can run the setup.sh script `./setup.sh`. You can exit the script at any time using `Ctrl-C`
- Make sure that you have a `~/.dotfiles` directory or else it will fail.

To have this as a command from your shell, add an alias to your `.bashrc` file. (Example - `alias config-dots='/path/to/setup'`).
If you have cloned the repo using the command above, then you can just
use `alias config-dots='$HOME/.source/dotfiles/setup'`.

Feel free to use my script but in your own configs, but don't forget to credit me ;).

*If you get an error make sure it has executible permissions `chmod +x <filename>`*

## How it works

- `~/.source/dotfiles` - location of the repository with all your configs.
- `~/.dots_global` - directory will have all your global app configs. You may want to use global configs for bash, mpv, mpd, etc.
Since they don't really change much.
- `~/.dotfiles` - directory with specific configs to a rice. You will have configs of bspwm, sxhkd, polybar, etc.

My script essentially manages moving, stowing and updating configs through a menu, removing the hassle of managing dots.

## Dependencies

- The bspwm/sxhkd config relies on rofi config, and also custom scripts.
- custom scripts relies on pywal, pywalfox and also zathura-pywal.
- ranger config requires ueberzug.
- super + d, dictionary needs the didyoumean package intalled, either built from source or installed from the AUR.

### Contributing

If you think you can improve this scripts: 
- Fork it.
- Create your branch.
- After your changes, make a pull request stating your changes, and your reasoning for them.

### Dotfile credits

Here are the credits to some of the scripts/configs used in the dotfiles themselves.

- If I have derived any custom scripts from already existing ones, credits mentioned in the file.
- one of the rofi configs is a modifed + themed version of rofi themes by adi1090x on [github](https://github.com/adi1090x/rofi).
- mpv config is from Tsuba's config on [github](https://github.com/Tsubajashi/mpv-settings).
- Firefox config is using [firefox-csshacks](https://github.com/MrOtherGuy/firefox-csshacks.git) by MrOtherGuy on github.
