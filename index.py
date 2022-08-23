#用code server写PY必看，其它我以及配置好，如果你还需要安装什么包的话，需要在下方执行 install('你要安装的包名') 然后Shell执行 python index.py ，目前以及安装requests和美汤4
def set_up_user_directory():
  import sys
  import site
  import os
  # this makes it work
  if not os.path.exists(site.USER_SITE):
    os.makedirs(site.USER_SITE)
    # since I'm installing with --user, packages
    # should be installed here,
    #so make sure it's on the path
    sys.path.insert(0, site.USER_SITE)

def install(package):
  set_up_user_directory()
  import pip
  pip.main(['install', package, "--user", "--upgrade"])
#install('BeautifulSoup4')