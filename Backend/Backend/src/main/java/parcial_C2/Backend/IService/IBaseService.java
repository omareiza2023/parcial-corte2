package parcial_C2.Backend.IService;

import java.util.List;
import parcial_C2.Backend.Entity.AbaseEntity;
public interface IBaseService<T extends AbaseEntity> {

    List<T> all();
    List<T> findByStateTrue();
    T findById(Long id) throws Exception;
    T save(T entity) throws Exception;
    void update(Long id, T entity) throws Exception;
    void delete(Long id) throws Exception;
}