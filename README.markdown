# Gavim - Gaveen's Vim Configuration

This is the Vim configuration I use. I'm working on a Fedora Linux system.
By default there's a very decent Vim configuration in Fedora. So I took
the default global Vim configuration file in a Fedora 10 system and did a
few tweaks to get it to my liking. As you would've expected, a large part
of the vimrc is straight from Fedora. This is the current setting I use.

If you plan to use this for your configuration, please note that you will
need Ruby installed and in your path (for the fuzzy_finder_textmate plugin).
Here are the plugins I use:
- NERDTree
- Scratch
- Rails
- Fuzzy_Finder_Textmate
- Gist
- VCS-Git
- and some more

## How to use this as your configuration
It's straight forward if you don't have custom Vim configuration. Just
clone this repo and either link (ln -s) or copy the
1. vimrc as ~/.vimrc
2. vim/ as ~/.vim

That's all. In case you are wondering, I'm not using gvim. So the files
in the repo are just for Vim. I made this for my use, but you are welcome
to use it, if it works for you. :)
