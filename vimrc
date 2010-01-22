if v:lang =~ "utf8$" || v:lang =~ "UTF-8$"
   set fileencodings=ucs-bom,utf-8,latin1
endif

set nocompatible        " Use Vim defaults (much better!)
set bs=indent,eol,start " allow backspacing over everything in insert mode
set viminfo='20,\"50    " read/write a .viminfo file, don't store more
                        " than 50 lines of registers
set history=50          " keep 50 lines of command line history
set ruler               " show the cursor position all the time
set number              " show line numbers
set smarttab            " smart tabulatin and backspace
set title               " show title
set incsearch           " find while typing
set t_Co=256            " terminal uses 256 colors

" Display a place holder character for tabs and trailing spaces
set list
set listchars=trail:⋅,nbsp:⋅,tab:▷⋅

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

    " Switch to working directory of the open file
    "autocmd BufEnter * lcd %:p:h
  augroup END

  " Enable formatting based on file types
  augroup myfiletypes
    autocmd!
    autocmd FileType ruby,eruby,yaml,cucumber,vim,lua,latex,tex set autoindent shiftwidth=2 softtabstop=2 expandtab
    autocmd BufRead *.mkd,*.markdown  set ai formatoptions=tcroqn2 comments=n:>
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

" Don't wake up system with blinking cursor:
" http://www.linuxpowertop.org/known.php
let &guicursor = &guicursor . ",a:blinkon0"

" Set the leader key
let mapleader = ","

" Set the key to toggle NERDTree
nnoremap <leader>d :NERDTreeToggle<cr>

let NERDChristmasTree = 1               " NERDTree with colors
let NERDTreeHighlightCursorline = 1     " highlight cursorline
let NERDTreeMapActivateNode='<CR>'      " set Enter/Return to activate a node

" Set the keys to turn spell checking on/off
map <F8> <Esc>:setlocal spell spelllang=en_us<CR>
map <F9> <Esc>:setlocal nospell<CR>

" Set keys to toggle Scratch buffer
function! ToggleScratch()
  if expand('%') == g:ScratchBufferName
    quit
  else
    Sscratch
  endif
endfunction

map <leader>s :call ToggleScratch()<CR>

" Enable code folding by syntax and disable folding by default
"setlocal foldmethod=syntax
"setlocal nofoldenable

" Turn off rails related things in statusbar
"let g:rails_statusline=0

" Remove highlighting search results
map <silent> <leader>nh :nohls <CR>

" Snipmate setup
source ~/.vim/snippets/support_functions.vim
autocmd vimenter * call ExtractSnips("~/.vim/snippets/html", "eruby")
autocmd vimenter * call ExtractSnips("~/.vim/snippets/html", "php")

" Vim-LaTeX setup
filetype plugin on
set grepprg=grep\ -nH\ $*
let g:tex_flavor='latex'

" Vala support
autocmd BufRead *.vala set efm=%f:%l.%c-%[%^:]%#:\ %t%[%^:]%#:\ %m
autocmd BufRead *.vapi set efm=%f:%l.%c-%[%^:]%#:\ %t%[%^:]%#:\ %m
au BufRead,BufNewFile *.vala  setfiletype vala
au BufRead,BufNewFile *.vapi  setfiletype vala

let vala_comment_strings = 1
let vala_space_errors = 1
let vala_no_tab_space_error = 1

" Set color scheme
colorscheme peaksea

" insoul
"colorscheme slate

"set foldmethod=syntax " this options is very slow at large size source file
"set nofoldenable

set hidden " do not lose undo history when move buffer

autocmd FileType ruby,eruby set omnifunc=rubycomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS

autocmd FileType ruby,eruby let g:rubycomplete_buffer_loading = 1
autocmd FileType ruby,eruby let g:rubycomplete_rails = 1
autocmd FileType ruby,eruby let g:rubycomplete_classes_in_global = 1

set backupdir=~/.vimtemp/backup
set directory=~/.vimtemp/swap
let g:NERDTreeQuitOnOpen=1
map <Leader>ff :FuzzyFinderFile \*\*\/<CR>
map <leader>fb :FuzzyFinderBuffer<CR>
map <leader>ft :FuzzyFinderTag<CR>

nnoremap <silent> <F3> :Rgrep<CR>
let Grep_Default_Filelist='*.r*'

let g:miniBufExplMapWindowNavVim=1
let g:miniBufExplMapWindowNavArrows=1
let g:miniBufExplMapCTabSwitchBufs=1
let g:miniBufExplModSelTarget=1 
map <Leader>m :TMiniBufExplorer<CR>
map <Leader>, :b!#<CR>
map <Leader>1 :b!1<CR>
map <Leader>2 :b!2<CR>
map <Leader>3 :b!3<CR>
map <Leader>4 :b!4<CR>
map <Leader>5 :b!5<CR>
map <Leader>6 :b!6<CR>
map <Leader>7 :b!7<CR>
map <Leader>8 :b!8<CR>
map <Leader>9 :b!9<CR>
map <Leader>0 :b!10<CR>
"map <Leader>01 :b!1<CR>
"map <Leader>02 :b!2<CR>
"map <Leader>03 :b!3<CR>
"map <Leader>04 :b!4<CR>
"map <Leader>05 :b!5<CR>
"map <Leader>06 :b!6<CR>
"map <Leader>07 :b!7<CR>
"map <Leader>08 :b!8<CR>
"map <Leader>09 :b!9<CR>
"map <Leader>10 :b!10<CR>
"map <Leader>11 :b!11<CR>
"map <Leader>12 :b!12<CR>
"map <Leader>13 :b!13<CR>
"map <Leader>14 :b!14<CR>
"map <Leader>15 :b!15<CR>
"map <Leader>16 :b!16<CR>
"map <Leader>17 :b!17<CR>
"map <Leader>18 :b!18<CR>
"map <Leader>19 :b!19<CR>
"map <Leader>20 :b!20<CR>
"map <Leader>21 :b!21<CR>
"map <Leader>22 :b!22<CR>
"map <Leader>23 :b!23<CR>
"map <Leader>24 :b!24<CR>
"map <Leader>25 :b!25<CR>
"map <Leader>26 :b!26<CR>
"map <Leader>27 :b!27<CR>
"map <Leader>28 :b!28<CR>
"map <Leader>29 :b!29<CR>
"map <Leader>30 :b!30<CR>
"map <Leader>31 :b!31<CR>
"map <Leader>32 :b!32<CR>
"map <Leader>33 :b!33<CR>
