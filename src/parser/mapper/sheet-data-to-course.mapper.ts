import { Course } from "../types/course.type";

export class SheetDataToCourseMapper {
    public static map(obj: any): Course {
        return {
            courseType: obj['*TIPO CURSO'],
            institution: obj['IES'],
            institutionId: obj['*IES_ID'],
            campus: obj['CAMPUS'],
            campusId: obj['*CAMPUS_ID'],
            courseName: obj['*NOME DO CURSO'],
            period: obj['*TURNO'],
            numberOfPaidMonths: obj['*QTDE DE MENSALIDADE DO CURSO'],
            price: obj['MENSALIDADE'],
            courseTotalPrice: obj['*VALOR DO CURSO'],
            classificationId: obj['*ID_CLASSIFICAÇÃO'],
            classification: obj['CLASSIFICAÇÃO'],
            emphasisId: obj['*ID_ENFASE'],
            emphasis: obj['ENFASE'],
            shortDescription: obj['*DESCRIÇÃO CURTA'],
            active: obj['*Ativo'],
            knowledgeAreaId: obj['*ID AREA DE CONHECIMENTO'],
            pravalerProductId: obj['ID PRODUTO PRVALER'],
            institutionCourseId: obj['ID_CURSO_IES'],
            enrollment: obj['MATRICULA'],
            modalType: obj['MODALIDADE']
        };
    }

}