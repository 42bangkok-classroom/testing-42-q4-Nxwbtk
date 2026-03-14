import { Controller } from "@nestjs/common";
import { IncidentService } from "./incident.service";

@Controller('incident')
export class IncidentController {
    private readonly incidents = [
        { id: 1, incidentName: 'KEYLOGGER', status: 'ACTIVE' },
        { id: 2, incidentName: 'ZERO_DAY', status: 'RESOLVED' },
        { id: 3, incidentName: 'RANSOMWARE', status: 'IGNORED' },
        { id: 4, incidentName: 'DATA_BREACH', status: 'ACTIVE' },
        { id: 5, incidentName: 'MALWARE', status: 'RESOLVED' },
        { id: 6, incidentName: 'PHISHING', status: 'RESOLVED' }
      ];
    constructor(private readonly incidentService: IncidentService) {}
    getSummary() {
        const count_active = this.incidents.filter((ic) => ic.status === 'ACTIVE');
        const count_resolved = this.incidents.filter((ic) => )
    }
}