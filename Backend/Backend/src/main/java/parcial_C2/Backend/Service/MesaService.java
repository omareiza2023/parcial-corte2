package parcial_C2.Backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import parcial_C2.Backend.Entity.Mesa;
import parcial_C2.Backend.IRepository.IBaseRepository;
import parcial_C2.Backend.IRepository.IMesaRepository;
import parcial_C2.Backend.IService.IMesaService;

@Service
public class MesaService extends ABaseService<Mesa> implements IMesaService {

    @Autowired
    private IMesaRepository repository;

    @Override
    protected IBaseRepository<Mesa, Long> getRepository() {
        return repository;
    }
}