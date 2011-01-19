set guifont=DejaVu\ Sans\ Mono\ 10      " set font
set columns=80                          " characters per line = 80
"set guioptions-=T                       " no toolbar

colorscheme railscasts_alt

" insoul
if os == "Darwin"
  cd space/git/me2day
elseif os == "Linux"
  set backupdir=~/.vim/tmp/gbackup
  set directory=~/.vim/tmp/gswap
endif

" ruby setting
let Grep_Default_Filelist='*.rb *.rhtml *.erb *.js *.css *.html'

" project directory
cd ~/space/git/me2day
