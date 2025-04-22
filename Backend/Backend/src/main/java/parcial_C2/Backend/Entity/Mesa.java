package parcial_C2.Backend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "mesa")
public class Mesa extends AbaseEntity{
    @Column(name = "mesaId", nullable = false , length = 20)
    private String id;

    @Column(name = "estado", nullable = false)
    private boolean state;

}
