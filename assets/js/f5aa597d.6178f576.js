"use strict";(self.webpackChunkbaizhi_wiki=self.webpackChunkbaizhi_wiki||[]).push([[399],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>p});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,h=c["".concat(i,".").concat(p)]||c[p]||m[p]||o;return a?t.createElement(h,l(l({ref:n},u),{},{components:a})):t.createElement(h,l({ref:n},u))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5714:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=a(7462),r=(a(7294),a(3905));const o={},l="MariaDB \u5165\u95e8",s={unversionedId:"blog/MariaDB-beginning",id:"blog/MariaDB-beginning",title:"MariaDB \u5165\u95e8",description:"\u5b89\u88c5MariaDB",source:"@site/docs/blog/MariaDB-beginning.md",sourceDirName:"blog",slug:"/blog/MariaDB-beginning",permalink:"/docs/blog/MariaDB-beginning",draft:!1,editUrl:"https://github.com/baizhi958216/baizhi958216/tree/docusaurus/docs/blog/MariaDB-beginning.md",tags:[],version:"current",frontMatter:{},sidebar:"blog",previous:{title:"Golang",permalink:"/docs/blog/Golang"},next:{title:"VSCode \u914d\u7f6e",permalink:"/docs/blog/My-VSCode"}},i={},d=[{value:"\u5b89\u88c5<code>MariaDB</code>",id:"\u5b89\u88c5mariadb",level:2},{value:"\u5b89\u88c5 mariadb mariadb-libs",id:"\u5b89\u88c5-mariadb-mariadb-libs",level:3},{value:"\u542f\u52a8<code>mariadb.service</code>\u548c<code>mysqld</code>",id:"\u542f\u52a8mariadbservice\u548cmysqld",level:2},{value:"\u914d\u7f6e\u5b89\u5168\u9009\u9879",id:"\u914d\u7f6e\u5b89\u5168\u9009\u9879",level:3},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:3},{value:"\u91cd\u7f6e root \u5bc6\u7801",id:"\u91cd\u7f6e-root-\u5bc6\u7801",level:2},{value:"\u505c\u6b62<code>mysqld</code>",id:"\u505c\u6b62mysqld",level:3},{value:"\u7528<code>mysqld_safe</code>\u542f\u52a8<code>mysqld</code>\u670d\u52a1",id:"\u7528mysqld_safe\u542f\u52a8mysqld\u670d\u52a1",level:3},{value:"\u4ee5 root \u8eab\u4efd\u767b\u5f55 mysql",id:"\u4ee5-root-\u8eab\u4efd\u767b\u5f55-mysql",level:3},{value:"\u4fee\u6539 root \u5bc6\u7801",id:"\u4fee\u6539-root-\u5bc6\u7801",level:3},{value:"\u505c\u6b62\u7531<code>mysqld_safe</code>\u542f\u52a8\u7684<code>mysqld</code>",id:"\u505c\u6b62\u7531mysqld_safe\u542f\u52a8\u7684mysqld",level:3},{value:"\u542f\u52a8<code>mysqld</code>",id:"\u542f\u52a8mysqld",level:2},{value:"\u66f4\u591a\u5185\u5bb9",id:"\u66f4\u591a\u5185\u5bb9",level:3},{value:"\u7b80\u5355\u5165\u95e8 Mariadb",id:"\u7b80\u5355\u5165\u95e8-mariadb",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:3},{value:"\u5217\u51fa\u6240\u6709\u6570\u636e\u5e93",id:"\u5217\u51fa\u6240\u6709\u6570\u636e\u5e93",level:3},{value:"\u9009\u62e9\u6570\u636e\u5e93",id:"\u9009\u62e9\u6570\u636e\u5e93",level:3},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:3},{value:"\u67e5\u770b\u8868",id:"\u67e5\u770b\u8868",level:3},{value:"\u63cf\u8ff0\u8868\u6570\u636e",id:"\u63cf\u8ff0\u8868\u6570\u636e",level:3},{value:"\u67e5\u627e\u8868\u6570\u636e",id:"\u67e5\u627e\u8868\u6570\u636e",level:3},{value:"\u589e\u52a0\u6570\u636e",id:"\u589e\u52a0\u6570\u636e",level:3},{value:"\u4fee\u6539\u6570\u636e",id:"\u4fee\u6539\u6570\u636e",level:3},{value:"\u66f4\u591a\u57fa\u7840\u5185\u5bb9",id:"\u66f4\u591a\u57fa\u7840\u5185\u5bb9",level:3}],u={toc:d};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mariadb-\u5165\u95e8"},"MariaDB \u5165\u95e8"),(0,r.kt)("h2",{id:"\u5b89\u88c5mariadb"},"\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"h2"},"MariaDB")),(0,r.kt)("h3",{id:"\u5b89\u88c5-mariadb-mariadb-libs"},"\u5b89\u88c5 mariadb mariadb-libs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S mariadb mariadb-libs\n")),(0,r.kt)("h1",{id:"\u914d\u7f6e\u6570\u636e\u5e93\u76ee\u5f55"},"\u914d\u7f6e\u6570\u636e\u5e93\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[baizhi958216@TianXuan ~]$ sudo mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql\nInstalling MariaDB/MySQL system tables in '/var/lib/mysql' ...\nOK\n\nTo start mysqld at boot time you have to copy\nsupport-files/mysql.server to the right place for your system\n\n\nTwo all-privilege accounts were created.\nOne is root@localhost, it has no password, but you need to\nbe system 'root' user to connect. Use, for example, sudo mysql\nThe second is mysql@localhost, it has no password either, but\nyou need to be the system 'mysql' user to connect.\nAfter connecting you can set the password, if you would need to be\nable to connect as any of these users with a password and without sudo\n\nSee the MariaDB Knowledgebase at https://mariadb.com/kb\n\nYou can start the MariaDB daemon with:\ncd '/usr' ; /usr/bin/mysqld_safe --datadir='/var/lib/mysql'\n\nYou can test the MariaDB daemon with mysql-test-run.pl\ncd '/usr/mysql-test' ; perl mysql-test-run.pl\n\nPlease report any problems at https://mariadb.org/jira\n\nThe latest information about MariaDB is available at https://mariadb.org/.\n\nConsider joining MariaDB's strong and vibrant community:\nhttps://mariadb.org/get-involved/\n\n[baizhi958216@TianXuan ~]$\n")),(0,r.kt)("h2",{id:"\u542f\u52a8mariadbservice\u548cmysqld"},"\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"h2"},"mariadb.service"),"\u548c",(0,r.kt)("inlineCode",{parentName:"h2"},"mysqld")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable mariadb.service mysqld\nsudo systemctl start mariadb.service mysqld\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u5b89\u5168\u9009\u9879"},"\u914d\u7f6e\u5b89\u5168\u9009\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mysql_secure_installation\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[baizhi958216@TianXuan ~]$ sudo mysql_secure_installation\n\nNOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB\n      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!\n\nIn order to log into MariaDB to secure it, we'll need the current\npassword for the root user. If you've just installed MariaDB, and\nhaven't set the root password yet, you should just press enter here.\n\nEnter current password for root (enter for none):\nOK, successfully used password, moving on...\n\nSetting the root password or using the unix_socket ensures that nobody\ncan log into the MariaDB root user without the proper authorisation.\n\nYou already have your root account protected, so you can safely answer 'n'.\n\nSwitch to unix_socket authentication [Y/n] n\n ... skipping.\n\nYou already have your root account protected, so you can safely answer 'n'.\n\nChange the root password? [Y/n] n\n ... skipping.\n\nBy default, a MariaDB installation has an anonymous user, allowing anyone\nto log into MariaDB without having to have a user account created for\nthem.  This is intended only for testing, and to make the installation\ngo a bit smoother.  You should remove them before moving into a\nproduction environment.\n\nRemove anonymous users? [Y/n] n\n ... skipping.\n\nNormally, root should only be allowed to connect from 'localhost'.  This\nensures that someone cannot guess at the root password from the network.\n\nDisallow root login remotely? [Y/n] n\n ... skipping.\n\nBy default, MariaDB comes with a database named 'test' that anyone can\naccess.  This is also intended only for testing, and should be removed\nbefore moving into a production environment.\n\nRemove test database and access to it? [Y/n] n\n ... skipping.\n\nReloading the privilege tables will ensure that all changes made so far\nwill take effect immediately.\n\nReload privilege tables now? [Y/n] y\n ... Success!\n\nCleaning up...\n\nAll done!  If you've completed all of the above steps, your MariaDB\ninstallation should now be secure.\n\nThanks for using MariaDB!\n[baizhi958216@TianXuan ~]$\n")),(0,r.kt)("h3",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,r.kt)("p",null,"\u76f4\u63a5\u8fd0\u884c mysql \u5373\u53ef\u8bbf\u95ee"),(0,r.kt)("h2",{id:"\u91cd\u7f6e-root-\u5bc6\u7801"},"\u91cd\u7f6e root \u5bc6\u7801"),(0,r.kt)("h3",{id:"\u505c\u6b62mysqld"},"\u505c\u6b62",(0,r.kt)("inlineCode",{parentName:"h3"},"mysqld")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop mysqld\n")),(0,r.kt)("h3",{id:"\u7528mysqld_safe\u542f\u52a8mysqld\u670d\u52a1"},"\u7528",(0,r.kt)("inlineCode",{parentName:"h3"},"mysqld_safe"),"\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"h3"},"mysqld"),"\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysqld_safe --skip-grant-tables --skip-networking &\n")),(0,r.kt)("h3",{id:"\u4ee5-root-\u8eab\u4efd\u767b\u5f55-mysql"},"\u4ee5 root \u8eab\u4efd\u767b\u5f55 mysql"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mysql -u root\n")),(0,r.kt)("h3",{id:"\u4fee\u6539-root-\u5bc6\u7801"},"\u4fee\u6539 root \u5bc6\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MariaDB [(none)]> use mysql\nMariaDB [mysql]> flush privileges;\nMariaDB [mysql]> ALTER USER 'root'@'localhost' IDENTIFIED BY '\u4f60\u7684\u65b0\u5bc6\u7801';\nMariaDB [mysql]> exit\n")),(0,r.kt)("h3",{id:"\u505c\u6b62\u7531mysqld_safe\u542f\u52a8\u7684mysqld"},"\u505c\u6b62\u7531",(0,r.kt)("inlineCode",{parentName:"h3"},"mysqld_safe"),"\u542f\u52a8\u7684",(0,r.kt)("inlineCode",{parentName:"h3"},"mysqld")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kill $(cat /var/lib/mysql/\u8ba1\u7b97\u673a\u540d.pid)\n")),(0,r.kt)("h2",{id:"\u542f\u52a8mysqld"},"\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"h2"},"mysqld")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start mysqld\n")),(0,r.kt)("h3",{id:"\u66f4\u591a\u5185\u5bb9"},"\u66f4\u591a\u5185\u5bb9"),(0,r.kt)("p",null,"\u8bf7\u79fb\u6b65",(0,r.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/title/MariaDB_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"},"ArchWiki")),(0,r.kt)("h2",{id:"\u7b80\u5355\u5165\u95e8-mariadb"},"\u7b80\u5355\u5165\u95e8 Mariadb"),(0,r.kt)("h3",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,r.kt)("p",null,"\u4f7f\u7528\u5bc6\u7801\u767b\u5f55 root"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[baizhi958216@TianXuan ~]$ mysql -u root -p\nEnter password:\nWelcome to the MariaDB monitor.  Commands end with ; or \\g.\nYour MariaDB connection id is 11\nServer version: 10.8.3-MariaDB Arch Linux\n\nCopyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nMariaDB [(none)]>\n")),(0,r.kt)("h3",{id:"\u5217\u51fa\u6240\u6709\u6570\u636e\u5e93"},"\u5217\u51fa\u6240\u6709\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"show databases;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"MariaDB [(none)]> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| performance_schema |\n| sys                |\n| test               |\n+--------------------+\n5 rows in set (0.000 sec)\n\nMariaDB [(none)]>\n")),(0,r.kt)("h3",{id:"\u9009\u62e9\u6570\u636e\u5e93"},"\u9009\u62e9\u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"use test;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"MariaDB [(none)]> use test;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nMariaDB [test]>\n")),(0,r.kt)("h3",{id:"\u521b\u5efa\u8868"},"\u521b\u5efa\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS books (\n  BookID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,\n  Title VARCHAR(100) NOT NULL,\n  SeriesID INT, AuthorID INT);\n\nCREATE TABLE IF NOT EXISTS authors\n(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT);\n\nCREATE TABLE IF NOT EXISTS series\n(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT);\n\nINSERT INTO books (Title,SeriesID,AuthorID)\nVALUES('The Fellowship of the Ring',1,1),\n      ('The Two Towers',1,1), ('The Return of the King',1,1),\n      ('The Sum of All Men',2,2), ('Brotherhood of the Wolf',2,2),\n      ('Wizardborn',2,2), ('The Hobbbit',0,1);\n")),(0,r.kt)("h3",{id:"\u67e5\u770b\u8868"},"\u67e5\u770b\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"MariaDB [test]> SHOW TABLES;\n+----------------+\n| Tables_in_test |\n+----------------+\n| authors        |\n| books          |\n| series         |\n+----------------+\n3 rows in set (0.000 sec)\n\nMariaDB [test]>\n")),(0,r.kt)("h3",{id:"\u63cf\u8ff0\u8868\u6570\u636e"},"\u63cf\u8ff0\u8868\u6570\u636e"),(0,r.kt)("p",null,"\u63cf\u8ff0\u521a\u521b\u5efa\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"books")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE books;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"MariaDB [test]> DESCRIBE books;\n+----------+--------------+------+-----+---------+----------------+\n| Field    | Type         | Null | Key | Default | Extra          |\n+----------+--------------+------+-----+---------+----------------+\n| BookID   | int(11)      | NO   | PRI | NULL    | auto_increment |\n| Title    | varchar(100) | NO   |     | NULL    |                |\n| SeriesID | int(11)      | YES  |     | NULL    |                |\n| AuthorID | int(11)      | YES  |     | NULL    |                |\n+----------+--------------+------+-----+---------+----------------+\n4 rows in set (0.001 sec)\n\nMariaDB [test]>\n")),(0,r.kt)("h3",{id:"\u67e5\u627e\u8868\u6570\u636e"},"\u67e5\u627e\u8868\u6570\u636e"),(0,r.kt)("p",null,"\u67e5\u627e",(0,r.kt)("inlineCode",{parentName:"p"},"books"),"\u7684\u6240\u6709\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM books;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"MariaDB [test]> SELECT * FROM books;\n+--------+----------------------------+----------+----------+\n| BookID | Title                      | SeriesID | AuthorID |\n+--------+----------------------------+----------+----------+\n|      1 | The Fellowship of the ring |        1 |        1 |\n|      2 | The Two Towers             |        1 |        1 |\n|      3 | The Return of the King     |        1 |        1 |\n|      4 | The Sum of All Men         |        2 |        2 |\n|      5 | Brotherhood of the Wolf    |        2 |        2 |\n+--------+----------------------------+----------+----------+\n5 rows in set (0.000 sec)\n\nMariaDB [test]>\n")),(0,r.kt)("h3",{id:"\u589e\u52a0\u6570\u636e"},"\u589e\u52a0\u6570\u636e"),(0,r.kt)("p",null,"\u65b0\u589e\u4e00\u672c\u6807\u9898\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Lair of Bones"),"\uff0c\u7cfb\u5217\u7f16\u53f7\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\uff0c\u4f5c\u8005\u7f16\u53f7\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\u7684\u4e66\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'insert into books(Title,SeriesID,AuthorID) values ("Lair of Bones",2,2);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MariaDB [test]> insert into books(Title,SeriesID,AuthorID) values ("Lair of Bones",2,2);\nQuery OK, 1 row affected (0.004 sec)\n\nMariaDB [test]>\n')),(0,r.kt)("h3",{id:"\u4fee\u6539\u6570\u636e"},"\u4fee\u6539\u6570\u636e"),(0,r.kt)("p",null,"\u5c06\u4e66\u7c4d\u7f16\u53f7\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\u7684\u4e66\u540d\u6539\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"The Hobbit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'update books set title = "The Hobbit" where BookID = 2;\n')),(0,r.kt)("h3",{id:"\u66f4\u591a\u57fa\u7840\u5185\u5bb9"},"\u66f4\u591a\u57fa\u7840\u5185\u5bb9"),(0,r.kt)("p",null,"\u79fb\u6b65",(0,r.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/mariadb-basics/"},"Mariadb")))}m.isMDXComponent=!0}}]);