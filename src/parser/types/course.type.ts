export type Course = {
    courseType: string;
    institution: string;
    institutionId: number;
    campus: string;
    campusId: number;
    courseName: string;
    period: string;
    numberOfPaidMonths: number;
    price?: number;
    courseTotalPrice: number;
    classificationId: number;
    classification?: string;
    emphasisId: number;
    emphasis?: string;
    shortDescription: string;
    active: boolean;
    knowledgeAreaId: number;
    pravalerProductId?: number;
    institutionCourseId?: number;
    enrollment?: string;
    modalType: number;
};
