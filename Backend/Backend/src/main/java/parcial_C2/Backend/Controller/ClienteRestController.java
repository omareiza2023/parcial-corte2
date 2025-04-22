package parcial_C2.Backend.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import parcial_C2.Backend.Entity.Cliente;
import parcial_C2.Backend.IService.IClienteService;

@RestController
@RequestMapping("/api/cliente")
public class ClienteRestController extends ABaseController<Cliente, IClienteService> {

    public ClienteRestController(IClienteService service) {
        super(service, "Cliente");
    }
}