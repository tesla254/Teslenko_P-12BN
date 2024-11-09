CREATE TABLE users (
	id int(11) NOT NULL auto_increment,
    name varchar(50) collate utf8mb4_unicode_ci NOT NULL,
    email varchar(50) collate utf8mb4_unicode_ci NOT NULL,
    password varchar(200) collate utf8mb4_unicode_ci NOT NULL,
    primary key (id),
    unique key email (email)
    ) engine=innoDB auto_increment=4 default CHARSET =utf8mb4 COLLATE=utf8mb4_unicode_ci;