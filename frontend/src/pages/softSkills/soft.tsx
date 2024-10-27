import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import MetricChart, { UserMetrics } from '@/pages/admin/components/metricChart';
import axiosInstance from '@/utils/axiosConfig';
import { toast } from 'sonner';

type FormValues = {
    answers: string[];
};

const questions = [
    'Была ли у вас ситуация, когда вам пришлось взять на себя лидерство в команде для достижения сложной цели? Расскажите об этом. Как вы взяли на себя ответственность за команду? Какие шаги вы предприняли? Какой результат удалось достичь? Были ли ваши действия эффективными? Какие уроки вы извлекли из этой ситуации о роли лидера? Как вы применяете эти выводы на практике? Планируете ли менять что-то в вашем лидерском стиле в будущем?',
    'Ваш коллега публично умаляет ваши достижения в работе. Как вы отреагируете?',
    'Какие шаги вы предпринимаете, чтобы завоевать доверие клиента?',
    'Был ли случай, когда вам нужно было придумать инновационное решение для улучшения процесса? Какие шаги вы предприняли? Как воплотили идею? Каков был результат? Повлияло ли это на эффективность? Что важного вы поняли о значении инноваций? Как теперь подходите к поиску инновационных решений?',
    'Ваши товарищи по команде все согласны с тем, как подходить к задаче, но вы не согласны. Как вы реагируете?',
    'Расскажите, как вы спланировали и выполняли большой проект. Каковы были результаты?',
    // Добавьте дополнительные вопросы при необходимости
];

export default function SoftSkillsForm() {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            answers: Array(questions.length).fill(''),
        },
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [chartData, setChartData] = useState<UserMetrics | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        try {
            // Включаем userId в параметры запроса
            const userId = 'b66f3e84-a15e-4ac4-8d45-06eb8f0f11e4';
            const url = `/api/check_solution/check_solution?userId=${userId}`;

            // Отправляем ответы как массив строк
            const response = await axiosInstance.post(url, data.answers);

            const result = response.data.result as string[];

            const userMetrics: UserMetrics = {
                leadership: parseFloat(result[0]),
                communicativeness: parseFloat(result[1]),
                customerOrientation: parseFloat(result[2]),
                innovationCreativity: parseFloat(result[3]),
                teamwork: parseFloat(result[4]),
                strategicThinking: parseFloat(result[5]),
            };

            setChartData(userMetrics);
            setModalOpen(true);
        } catch (error) {
            console.error('Form submission error:', error);
            toast.error('Не удалось отправить форму. Пожалуйста, попробуйте снова.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Анкета</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {questions.map((question, index) => (
                            <div key={index} className="space-y-2">
                                <Label>{question}</Label>
                                <Controller
                                    control={control}
                                    name={`answers.${index}`}
                                    render={({ field }) => (
                                        <Textarea
                                            placeholder="Ваш ответ..."
                                            {...field}
                                            className="resize-none"
                                        />
                                    )}
                                />
                            </div>
                        ))}
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? 'Отправка...' : 'Отправить'}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {/* Модальное окно */}
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent className="max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Ваши результаты</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        {chartData && <MetricChart metrics={chartData} />}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
