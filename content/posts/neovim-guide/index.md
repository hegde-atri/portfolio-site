+++
title = "A neovim guide"
description = "Helping you get started with neovim"
date=2022-06-28
[extra]
toc = true
[taxonomies]
categories = ["Post", "Guide"]
tags = ["Neovim"]
+++

# A neovim guide

This is a guide to get you started using neovim, replacing your IDE. We are gonna be installing neovim on a linux machine,
installing plugins and customizing it to our preference.

I am still learning vim, but soon there will be a guide to make vim replace your IDE.

## Configuration file

I used to use vim, without any plugins before this and am accustomed to typing `vim` in the terminal, so I set myself an alias in my bashrc file.
```sh
...
alias vim='nvim'
...
```

The configuration file for neovim is located at `~/.config/nvim/init.vim`. First let us configure some basic options for neovim.
I am going to createe the directory and open `init.vim`.

```sh
mkdir -p ~/.config/nvim
vim ~/.config/nvim/init.vim
```
My configuration so far: 
```vim
call plug#begin()
    " Appearance
    Plug 'vim-airline/vim-airline'
    Plug 'ryanoasis/vim-devicons'
    Plug 'folke/tokyonight.nvim', { 'branch': 'main' }
    Plug 'vim-airline/vim-airline-themes'

    " Utilities
    Plug 'sheerun/vim-polyglot'
    Plug 'jiangmiao/auto-pairs'
    Plug 'ap/vim-css-color'
    Plug 'preservim/nerdtree'

    " Completion / linters / formatters
    " Plug 'neoclide/coc.nvim',  {'branch': 'master', 'do': 'yarn install'}
    Plug 'plasticboy/vim-markdown'

    " Git
    Plug 'airblade/vim-gitgutter'
call plug#end() 
```
These are the plugins I use
- `vim-airline` - for the status bars
- `vim-devicons` - provides icons
- `tokyonight.vim` & `vim-airline-themes` - themes
- `vim-polygot` - language pack for vim
- `auto-pairs` - automatically pairs syntax
- `vim-css-color` - hex values have colour background
- `nerdtree` - tree style file explorer
- `vim-markdown` - markdown related features
- `vim-gitgutter` - git gutter


```vim
" Options
" set background=dark
set clipboard=unnamedplus
set completeopt=noinsert,menuone,noselect
set cursorline
set hidden
set inccommand=split
set mouse=a
set number
set relativenumber
set splitbelow splitright
set title
set ttimeoutlen=0
set wildmenu

" Tabs size
set expandtab
set shiftwidth=2
set tabstop=2

filetype plugin indent on
syntax on

" Italics
let &t_ZH="\e[3m"
let &t_ZR="\e[23m"
```
- `completeopt` - gives more IDE like suggestion menu
- `clipboard` - shared clipboard
- `hidden` - hides buffers
- `mouse` - mouse everywhere
- `number` & `relativenumber` - line numbers enabled, that are relative to current line
- `syntax detection based on filetype`

and as such, the rest are self-explanatory. `" Italic` for better italics support, when italics not working.


```vim
" Colours
colorscheme tokyonight
let g:airline_theme='base16_dracula'
let g:airline_powerline_fonts = 1
let g:airline#extensions#tabline#enabled = 1
let g:tokyonight_style = "night"
let g:tokyonight_italic_functions = 1
let g:tokyonight_sidebars = [ "qf", "vista_kind", "terminal", "packer" ]

" Nerdtree
let NERDTreeShowHidden=1
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-f> :NERDTreeFind<CR>

" Tabs
nnoremap <C-h> :tabprev<CR>
nnoremap <C-l> :tabnext<CR>
```

Here I have set my `colorscheme`, configured `airline`and added some keybindings for navigating tabs and using NERDTree.

```vim
" For markdown
" Disable math tex conceal feature
let g:tex_conceal = ''
let g:vim_markdown_math = 1

" Markdown
let g:vim_markdown_folding_disabled = 1
let g:vim_markdown_frontmatter = 1
let g:vim_markdown_conceal = 0
let g:vim_markdown_fenced_languages = ['tsx=typescriptreact']
```

These are the markdown plugin settings

## Workflow

I myself am still figuring out a good workflow coming from Jetbrains IDE's. I have been using tabs on vim, by using the `:tabnew` command to create new tabs, selecting the required
file using Nerdtree and switching between tabs using `:tabprev` and `:tabnext`.

