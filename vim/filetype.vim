" markdown filetype file

if exists("did\_load\_filetypes")
  finish
endif

augroup markdown
  au! BufRead,BufNewFile *.mkd,*.markdown   setfiletype mkd
augroup END
