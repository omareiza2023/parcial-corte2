package parcial_C2.Backend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Reserva")
public class Reserva  extends AbaseEntity{

    @Column(name = "Hora", nullable = false , length = 20)
    private String hour;

    @Column(name = "Fecha", nullable = false , length = 20, unique = true)
    private String date;

    @Column(name = "Mesa", nullable = false , length = 50)
    private String table;

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTable() {
        return table;
    }

    public void setTable(String table) {
        this.table = table;
    }
}
