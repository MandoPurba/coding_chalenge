-- Database: data_tamu

-- DROP DATABASE IF EXISTS data_tamu;

CREATE DATABASE data_tamu
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE IF NOT EXISTS public.tamu
(
    name character varying(150) COLLATE pg_catalog."default" NOT NULL,
    adress character varying(200) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(50) COLLATE pg_catalog."default" NOT NULL,
    note text COLLATE pg_catalog."default"
)
