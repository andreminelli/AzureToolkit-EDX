export interface ComputerVisionRequest {
    url: string;
}
export interface ComputerVisionResponse {
    description: {
        captions: Array<{
            confidence: number;
            text: string;
        }>;
    };

    metadata: {
        width: number;
        height: number;
    };

    tags: Array<{
        confidence: number;
        name: string;
    }>;
    
    faces: Array<{
        age: number;
        gender: string;
        faceRectangle: {
            top: number,
            left: number,
            width: number,
            height: number
        }
    }>
}