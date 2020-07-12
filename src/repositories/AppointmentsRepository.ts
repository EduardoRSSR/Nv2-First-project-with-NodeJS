// Todo código comentado estava sendo utilizado antes da implementação do TypeORM + Postgres
// Para obter todo código antigo sem utilização de banco de dados acessar o repositório no GitHub

import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

/*
interface CreateAppointmentDTO {
  provider: string;
  date: Date;
} */

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }

  /* public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  } */
}

export default AppointmentsRepository;
