import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


interface BlogCardProps{
    title: string;
    description: string;
}

export default function BlogCard({ title, description }: BlogCardProps) {
    return (
        <Card className='bg-transparent text-white'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}