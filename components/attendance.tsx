import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const attendanceData = [
  { id: 1, name: "Emma White", totalSessions: 120, attended: 114, streak: 21, totalVisits: 114 },
  { id: 2, name: "John Doe", totalSessions: 120, attended: 110, streak: 18, totalVisits: 110 },
  { id: 3, name: "Jane Smith", totalSessions: 120, attended: 106, streak: 14, totalVisits: 106 },
  { id: 4, name: "Mike Johnson", totalSessions: 120, attended: 102, streak: 12, totalVisits: 102 },
  { id: 5, name: "Emily Brown", totalSessions: 120, attended: 98, streak: 10, totalVisits: 98 },
  { id: 6, name: "Chris Wilson", totalSessions: 120, attended: 94, streak: 8, totalVisits: 94 },
  { id: 7, name: "Sarah Davis", totalSessions: 120, attended: 90, streak: 7, totalVisits: 90 },
  { id: 8, name: "Tom Anderson", totalSessions: 120, attended: 86, streak: 6, totalVisits: 86 },
  { id: 9, name: "Lisa Taylor", totalSessions: 120, attended: 82, streak: 5, totalVisits: 82 },
  { id: 10, name: "David Martinez", totalSessions: 120, attended: 78, streak: 4, totalVisits: 78 },
];

function calculateAttendancePercentage(student: any) {
  return ((student.attended / student.totalSessions) * 100).toFixed(2);
}

function getBadgeVariant(percentage: any) {
  if (percentage >= 90) return "default";
  if (percentage >= 75) return "secondary";
  return "destructive";
}

export default function Component() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Ranking de Presença</CardTitle>
        <CardDescription>Alunos mais assíduos do mês de novembro</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Ranking</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Frequência</TableHead>
              <TableHead>Quant. de Dias</TableHead>
              <TableHead>Total de Visitas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceData.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(calculateAttendancePercentage(student))}>
                    {calculateAttendancePercentage(student)}%
                  </Badge>
                </TableCell>
                <TableCell>{student.streak} dias</TableCell>
                <TableCell>{student.totalVisits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
