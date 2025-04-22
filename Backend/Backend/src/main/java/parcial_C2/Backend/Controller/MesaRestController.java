package parcial_C2.Backend.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import parcial_C2.Backend.Entity.Mesa;
import parcial_C2.Backend.IService.IMesaService;

@RestController
@RequestMapping("/api/mesa")
public class MesaRestController extends ABaseController<Mesa, IMesaService> {

    public MesaRestController(IMesaService service) {
        super(service, "Mesa");
    }
}