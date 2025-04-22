package parcial_C2.Backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import parcial_C2.Backend.Entity.Cliente;
import parcial_C2.Backend.IRepository.IBaseRepository;
import parcial_C2.Backend.IRepository.IClienteRepository;
import parcial_C2.Backend.IService.IClienteService;

@Service
public class ClienteService extends ABaseService<Cliente> implements IClienteService {

    @Autowired
    private IClienteRepository repository;

    @Override
    protected IBaseRepository<Cliente, Long> getRepository() {
        return repository;
    }
}