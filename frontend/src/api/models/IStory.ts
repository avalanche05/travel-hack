export interface IStory {
    id: number;
    steps: IStep[];
}

export interface IStep {
    id: number;
    title: string;
    image: string;
    is_quiz: boolean;
    options: IOption[];
}

export interface IOption {
    id: number;
    label: string;
}
