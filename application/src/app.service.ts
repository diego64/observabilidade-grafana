import { Injectable } from '@nestjs/common';
import { metrics } from '@opentelemetry/api';
import { log } from './infra/logger';

@Injectable()
export class AppService {
  getHello(): string {
    const metric = metrics.getMeter('application');
    const successMetric = metric.createCounter('success');
    log.info('INFO [SUCCESS]: Dados recebidos com sucesso!');
    successMetric.add(1);
    return 'Aplicação funcionando com sucesso!';
  }
  metricTest(): string {
    const metric = metrics.getMeter('application');
    const errorMetric = metric.createCounter('error');
     log.info('INFO [ERROR]: Erro ao receber dados!');
    errorMetric.add(1);
    const histogram = metric.createHistogram('request_duration');
    histogram.record(1000);
    return 'Métrica de error adicionada!';
  }
}
