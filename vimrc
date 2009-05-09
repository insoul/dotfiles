if v:lang =~ "utf8$" || v:lang =~ "UTF-8$"
   set fileencodings=ucs-bom,utf-8,latin1
endif

set nocompatible	" Use Vim defaults (much better!)
set bs=indent,eol,start		" allow backspacing over everything in insert mode
"set ai			" always set autoindenting on
"set backup		" keep a backup file
set viminfo='20,\"50	" read/write a .viminfo file, don't store more
			" than 50 lines of registers
set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set number		" show line numbers
set smarttab		" smart tabulatin and backspace
set title		" show title
"set cursorline		" show the current working line	

" Only do this part when compiled with support for autocommands
if has("autocmd")
  augroup fedora
  autocmd!
  " In text files, always limit the width of text to 78 characters
  autocmd BufRead *.txt set tw=78
  " When editing a file, always jump to the last cursor position
  autocmd BufReadPost *
  \ if line("'\"") > 0 && line ("'\"") <= line("$") |
  \   exe "normal! g'\"" |
  \ endif
  " don't write swapfile on most commonly used directories for NFS mounts or USB sticks
  autocmd BufNewFile,BufReadPre /media/*,/mnt/* set directory=~/tmp,/var/tmp,/tmp
  " start with spec file template
"  autocmd BufNewFile *.spec 0r /usr/share/vim/vimfiles/template.spec
  augroup END
endif

if has("cscope") && filereadable("/usr/bin/cscope")
   set csprg=/usr/bin/cscope
   set csto=0
   set cst
   set nocsverb
   " add any database in current directory
   if filereadable("cscope.out")
      cs add cscope.out
   " else add database pointed to by environment
   elseif $CSCOPE_DB != ""
      cs add $CSCOPE_DB
   endif
   set csverb
endif

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

filetype plugin indent on

if &term=="xterm"
     set t_Co=8
     set t_Sb=[4%dm
     set t_Sf=[3%dm
endif

" Don't wake up system with blinking cursor:
" http://www.linuxpowertop.org/known.php
let &guicursor = &guicursor . ",a:blinkon0"

" Set the leader key
let mapleader = ","

" Set the key to toggle NERDTree
map <leader>d :execute 'NERDTreeToggle ' . getcwd()<CR>

let NERDChristmasTree = 1		" NERDTree with colors
let NERDTreeHighlightCursorline = 1	" highlight cursorline
let NERDTreeMapActivateNode='<CR>'	" set Enter/Return to activate a node
"let NERDTreeShowHidden = 1		" show hidden files
"let NERDTreeIgnore=['\.git','\.DS_Store']

" Set the keys to turn spell checking on/off
map <F8> <Esc>:setlocal spell spelllang=en_us<CR>
map <F9> <Esc>:setlocal nospell<CR>

" Set FuzzyFinder settings
let g:fuzzy_ignore = "*.log"   
let g:fuzzy_matching_limit = 70
let g:fuzzy_ceiling=20000	" file count limit to search

" Add what to ignore in the fuzzy search
let g:fuzzy_ignore = "*.png;*.PNG;*.JPG;*.jpg;*.GIF;*.gif"
let g:fuzzy_ignore = "*.ogg;*.OGG;*.ogv;*.OGV;*.mkv;*.MKV"
let g:fuzzy_ignore = "*.mp3;*.mp3;*.mp4;*.MP4;*.avi;*.AVI;*.wma;*.WMA;*.wmv;*.WMV"
let g:fuzzy_ignore = "*.flv;*.FLV;*.mov;*.MOV;*.pdf;*.PDF"
let g:fuzzy_ignore = "*.zip;*.ZIP;*.tar;*.7z;*.gz;*.bz2"

map <leader>t :FuzzyFinderTextMate<CR>
map <leader>b :FuzzyFinderBuffer<CR>

" Set keys to toggle Scratch buffer 
function! ToggleScratch()      
  if expand('%') == g:ScratchBufferName
    quit
  else
    Sscratch                   
  endif
endfunction

map <leader>s :call ToggleScratch()<CR>

" Enable code folding by syntax and set foldlevel high
" so that the code is not folded by default
set foldenable
set foldmethod=syntax
set foldlevel=999

" Turn off rails related things in statusbar
let g:rails_statusline=0 

" Enable formatting based on file types
augroup myfiletypes
  autocmd!
  autocmd FileType ruby,eruby,yaml,cucumber,vim,lua,latex,tex set autoindent shiftwidth=2 softtabstop=2 expandtab 
  autocmd BufRead *.mkd,*.markdown  set ai formatoptions=tcroqn2 comments=n:>
augroup END 

" Remove highlighting search results
map <silent> <leader>nh :nohls <CR>

" Switch to working directory of the open file 
autocmd BufEnter * lcd %:p:h
