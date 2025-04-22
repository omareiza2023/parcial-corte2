package parcial_C2.Backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import parcial_C2.Backend.Entity.Reserva;
import parcial_C2.Backend.IRepository.IBaseRepository;
import parcial_C2.Backend.IRepository.IReservaRepository;
import parcial_C2.Backend.IService.IReservaService;

@Service
public class ReservaService extends ABaseService<Reserva> implements IReservaService {

    @Autowired
    private IReservaRepository repository;

    @Override
    protected IBaseRepository<Reserva, Long> getRepository() {
        return repository;
    }
}