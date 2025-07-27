import AppointmentList from '@/components/appointmentList';

export default function AppointmentsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <AppointmentList />
    </div>
  );
}
