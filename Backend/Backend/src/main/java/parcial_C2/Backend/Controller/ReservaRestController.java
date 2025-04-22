package parcial_C2.Backend.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import parcial_C2.Backend.Entity.Reserva;
import parcial_C2.Backend.IService.IReservaService;

@RestController
@RequestMapping("/api/reserva")
public class ReservaRestController extends ABaseController<Reserva, IReservaService> {

    public ReservaRestController(IReservaService service) {
        super(service, "Reserva");
    }
}
