package parcial_C2.Backend.IRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import parcial_C2.Backend.Entity.AbaseEntity;

@Repository
public interface IBaseRepository<T extends AbaseEntity, ID> extends JpaRepository<T,Long> {
}
