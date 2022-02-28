npm install express pg pg-hsotre sequelize morgan @babel/poliyfill
postgres


CREATE DATABASE chronometer
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

    

CREATE TABLE IF NOT EXISTS public.markes
(
    id integer NOT NULL DEFAULT nextval('markes_id_seq'::regclass),
    marke text COLLATE pg_catalog."default" NOT NULL,
    status text COLLATE pg_catalog."default" NOT NULL,
    date_register timestamp with time zone NOT NULL DEFAULT '2022-02-27 17:57:59.768-05'::timestamp with time zone,
    CONSTRAINT markes_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.markes
    OWNER to postgres;