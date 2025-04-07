package repository

import groovy.sql.Sql
import groovy.util.ConfigSlurper

class DatabaseConnection {
    static Sql getConnection() {
        def config = new ConfigSlurper().parse(new File("src/main/resources/application.properties").toURL())
        def url = config.db.url
        def username = config.db.username
        def password = config.db.password
        def driver = "org.postgresql.Driver"

        def sql = Sql.newInstance(url, username, password, driver)
        return sql
    }
}
