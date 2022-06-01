#
# 安装```MariaDB```
## 安装mariadb mariadb-libs
```bash
sudo pacman -S mariadb mariadb-libs
```
# 配置数据库目录
```bash
[baizhi958216@TianXuan ~]$ sudo mariadb-install-db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
Installing MariaDB/MySQL system tables in '/var/lib/mysql' ...
OK

To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system


Two all-privilege accounts were created.
One is root@localhost, it has no password, but you need to
be system 'root' user to connect. Use, for example, sudo mysql
The second is mysql@localhost, it has no password either, but
you need to be the system 'mysql' user to connect.
After connecting you can set the password, if you would need to be
able to connect as any of these users with a password and without sudo

See the MariaDB Knowledgebase at https://mariadb.com/kb

You can start the MariaDB daemon with:
cd '/usr' ; /usr/bin/mysqld_safe --datadir='/var/lib/mysql'

You can test the MariaDB daemon with mysql-test-run.pl
cd '/usr/mysql-test' ; perl mysql-test-run.pl

Please report any problems at https://mariadb.org/jira

The latest information about MariaDB is available at https://mariadb.org/.

Consider joining MariaDB's strong and vibrant community:
https://mariadb.org/get-involved/

[baizhi958216@TianXuan ~]$ 
```
# 启动```mariadb.service```和```mysqld```
## 配置安全选项
```bash
sudo mysql_secure_installation
```
```bash
[baizhi958216@TianXuan ~]$ sudo mysql_secure_installation

NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user. If you've just installed MariaDB, and
haven't set the root password yet, you should just press enter here.

Enter current password for root (enter for none): 
OK, successfully used password, moving on...

Setting the root password or using the unix_socket ensures that nobody
can log into the MariaDB root user without the proper authorisation.

You already have your root account protected, so you can safely answer 'n'.

Switch to unix_socket authentication [Y/n] n
 ... skipping.

You already have your root account protected, so you can safely answer 'n'.

Change the root password? [Y/n] n
 ... skipping.

By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] n
 ... skipping.

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] n
 ... skipping.

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] n
 ... skipping.

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
[baizhi958216@TianXuan ~]$
```
## 启动服务
```bash
sudo systemctl enable mariadb.service mysqld
sudo systemctl start mariadb.service mysqld
```
直接运行mysql即可访问
# 重置 root 密码
## 停止```mysqld```
```bash
sudo systemctl stop mysqld
```
## 用```mysqld_safe```启动```mysqld```服务
```bash
mysqld_safe --skip-grant-tables --skip-networking &
```
## 以root身份登录mysql
```bash
sudo mysql -u root
```
## 修改root密码
```bash
MariaDB [(none)]> use mysql
MariaDB [mysql]> flush privileges;
MariaDB [mysql]> ALTER USER 'root'@'localhost' IDENTIFIED BY '你的新密码';
MariaDB [mysql]> exit
```
## 停止由```mysqld_safe```启动的```mysqld```
```bash
sudo kill $(cat /var/lib/mysql/计算机名.pid)
```
## 启动```mysqld```
```bash
sudo systemctl start mysqld
```
### 更多内容
请移步[ArchWiki](https://wiki.archlinux.org/title/MariaDB_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))
# 简单入门Mariadb
## 登录
使用密码登录root
```bash
mysql -u root -p
```
```bash
[baizhi958216@TianXuan ~]$ mysql -u root -p
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 11
Server version: 10.8.3-MariaDB Arch Linux

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> 
```
## 列出所有数据库
```sql
show databases;
```
```sql
MariaDB [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| test               |
+--------------------+
5 rows in set (0.000 sec)

MariaDB [(none)]> 
```
## 选择数据库
选择```test```数据库
```sql
use test;
```
```sql
MariaDB [(none)]> use test;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
MariaDB [test]> 
```
## 创建表
```sql
CREATE TABLE IF NOT EXISTS books (
  BookID INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  Title VARCHAR(100) NOT NULL, 
  SeriesID INT, AuthorID INT);

CREATE TABLE IF NOT EXISTS authors 
(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT);

CREATE TABLE IF NOT EXISTS series 
(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT);

INSERT INTO books (Title,SeriesID,AuthorID) 
VALUES('The Fellowship of the Ring',1,1), 
      ('The Two Towers',1,1), ('The Return of the King',1,1),  
      ('The Sum of All Men',2,2), ('Brotherhood of the Wolf',2,2), 
      ('Wizardborn',2,2), ('The Hobbbit',0,1);
```
## 查看表
```sql
SHOW TABLES;
```
```sql
MariaDB [test]> SHOW TABLES;
+----------------+
| Tables_in_test |
+----------------+
| authors        |
| books          |
| series         |
+----------------+
3 rows in set (0.000 sec)

MariaDB [test]> 
```
## 描述表数据
描述刚创建的```books```  
```sql
DESCRIBE books;
```
```sql
MariaDB [test]> DESCRIBE books;
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| BookID   | int(11)      | NO   | PRI | NULL    | auto_increment |
| Title    | varchar(100) | NO   |     | NULL    |                |
| SeriesID | int(11)      | YES  |     | NULL    |                |
| AuthorID | int(11)      | YES  |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+
4 rows in set (0.001 sec)

MariaDB [test]> 
```
## 查找表数据
查找```books```的所有数据
```sql
SELECT * FROM books;
```
```sql
MariaDB [test]> SELECT * FROM books;
+--------+----------------------------+----------+----------+
| BookID | Title                      | SeriesID | AuthorID |
+--------+----------------------------+----------+----------+
|      1 | The Fellowship of the ring |        1 |        1 |
|      2 | The Two Towers             |        1 |        1 |
|      3 | The Return of the King     |        1 |        1 |
|      4 | The Sum of All Men         |        2 |        2 |
|      5 | Brotherhood of the Wolf    |        2 |        2 |
+--------+----------------------------+----------+----------+
5 rows in set (0.000 sec)

MariaDB [test]> 
```
## 增加数据
新增一本标题为```Lair of Bones```，系列编号为```2```，作者编号为```2```的书：
```sql
insert into books(Title,SeriesID,AuthorID) values ("Lair of Bones",2,2);
```
```sql
MariaDB [test]> insert into books(Title,SeriesID,AuthorID) values ("Lair of Bones",2,2);
Query OK, 1 row affected (0.004 sec)

MariaDB [test]> 
```
## 修改数据
将书籍编号为```2```的书名改为```The Hobbit```
```sql
update books set title = "The Hobbit" where BookID = 2;
```
## 更多基础内容
移步[Mariadb](https://mariadb.com/kb/en/mariadb-basics/)