set guifont=DejaVu\ Sans\ Mono\ 12      " set font
set columns=80                          " characters per line = 80
"set guioptions-=T                       " no toolbar

colorscheme railscasts_alt

" insoul
if os == "Darwin"
  cd space/repository/me2day
elseif os == "Linux"
  set backupdir=~/.vimtemp/gbackup
  set directory=~/.vimtemp/gswap
endif
