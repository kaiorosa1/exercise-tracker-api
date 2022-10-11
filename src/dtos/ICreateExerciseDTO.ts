interface ICreateExerciseDTO {
    id?: string;
    title: string;
    duration: string;
    description: string;
    date: Date;
    user_id: string;
    category_id: string;
}

export { ICreateExerciseDTO }