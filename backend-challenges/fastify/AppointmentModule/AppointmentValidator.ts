import { z } from 'zod';

export const appointmentStatusSchema = z.enum([
  "scheduled",
  "confirmed",
  "cancelled",
]);

export const creatAppointmentSchema = z.object({
    title: z.string().min(1).max(100),
    description:z.string().max(1000).optional(),
    startAt: z.iso.datetime(),
    endAt: z.iso.datetime(),
    patientId: z.string().min(1),
    practitionnerId: z.string().min(1),
}).refine(
    (data) => new Date(data.startAt) < new Date(data.endAt),
    {
        message: "startAt must be before endAt",
        path: ["startAt"],
    }
)

export const updateAppointmentSchema = z.object({
    title: z.string().min(1).max(100).optional(),
    description:z.string().max(1000).optional(),
    startAt: z.iso.datetime().optional(),
    endAt: z.iso.datetime().optional(),
    patientId: z.string().min(1).optional(),
    practitionnerId: z.string().min(1).optional(),
    status: appointmentStatusSchema.optional(),
})

export type CreateAppointmentDto = z.infer<typeof creatAppointmentSchema>;
export type UpdateAppointmentDto = z.infer<typeof updateAppointmentSchema>
export type AppointmentStatus = z.infer<typeof appointmentStatusSchema>;
