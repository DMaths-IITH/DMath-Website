interface InfoViewModel{
    title: string;
    info: string;
    titleColor: string;
    titleAlign: "center" | "right" | "left";
    links: {
        "link":string,
        "linktext":string
    }[];
    rightFooter: string;
}

interface ImageViewModel{
    image: string;
    caption: string;
}

interface ProfileViewModel{
    Image: string;
    Name: string;
    email: string;
    Designation: string;
    Area: string;
    link: string;
    extraDetails: string[];
}

interface TableViewModel{
    title: string;
    content: string;
    speaker: string;
    dateVenue: string;
    links: {
        "link": string, 
        "linktext": string
    };
}

interface CarouselModel{
    images: string[];
}

interface BatchViewProps{
    GrpImage: string;
    BatchName: string;
    Students: string[];
}

interface PublicationModel{
    people: string;
    name: string;
    details: string;
}

interface GridViewModel{
    items: {
        component_id: string;
        type: string;
    }[]
}

interface BatchViewModel{
    GrpImage: string;
    BatchName: string;
    Students: string[];
}

interface TableModel{
    title: string;
    cols: number;
    headers: string[];
    rows: string[][];
}

interface MarqueeModel{
    content: string;
}

export {InfoViewModel, ProfileViewModel, TableViewModel, BatchViewModel, ImageViewModel,
    CarouselModel, BatchViewProps, PublicationModel, GridViewModel, TableModel, MarqueeModel}