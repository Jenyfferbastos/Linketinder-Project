package repository

import java.sql.Connection
import java.sql.DriverManager

class DatabaseConnection {
    static String url = "jdbc:postgresql://localhost:5432/linketinder_db"
    static String usuario = "admin"
    static String senha = "admin123"

    static Connection conectar() {
        try {
            Class.forName("org.postgresql.Driver")
            return DriverManager.getConnection(url, usuario, senha)
        } catch (Exception e) {
            e.printStackTrace()
            return null
        }
    }
}