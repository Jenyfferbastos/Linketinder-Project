package repository

import groovy.sql.Sql

class DatabaseConnection {
    static Sql getConnection() {
        def url = "jdbc:postgresql://localhost:5432/linketinder"
        def user = "admin"
        def password = "admin123"
        def driver = "org.postgresql.Driver"

        def sql = Sql.newInstance(url, user, password, driver)
        return sql
    }
}
