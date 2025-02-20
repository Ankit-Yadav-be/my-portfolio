import { useState } from "react";
import {
    Box, FormControl, FormLabel, Input, Textarea, Button, Stack,
    Tag, TagLabel, TagCloseButton, useToast
} from "@chakra-ui/react";
import axios from "axios";

const AddProjectForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [github, setGithub] = useState("");
    const [image, setImage] = useState(null);
    const [techStack, setTechStack] = useState([]);
    const [newTech, setNewTech] = useState("");
    const toast = useToast();

    const handleTechAdd = () => {
        if (newTech && !techStack.includes(newTech)) {
            setTechStack([...techStack, newTech]);
            setNewTech("");
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !link || !github) {
            toast({
                title: "Missing Fields",
                description: "Please fill all required fields.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("link", link);
        formData.append("github", github);
        formData.append("techStack", JSON.stringify(techStack));
        if (image) formData.append("image", image);

        try {
            const response = await axios.post("https://my-portfolio-10zk.onrender.com/api/add", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast({
                title: "Success",
                description: "Project added successfully!",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            setTitle("");
            setDescription("");
            setLink("");
            setGithub("");
            setImage(null);
            setTechStack([]);
            document.getElementById("imageInput").value = ""; // Reset file input

        } catch (error) {
            console.error("Error adding project:", error);
            toast({
                title: "Error",
                description: "Failed to add project.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={5} maxWidth="500px" mx="auto">
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="title" isRequired>
                        <FormLabel>Project Title</FormLabel>
                        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </FormControl>

                    <FormControl id="description" isRequired>
                        <FormLabel>Description</FormLabel>
                        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </FormControl>

                    <FormControl id="link" isRequired>
                        <FormLabel>Project Link</FormLabel>
                        <Input type="url" value={link} onChange={(e) => setLink(e.target.value)} />
                    </FormControl>

                    <FormControl id="github" isRequired>
                        <FormLabel>GitHub Repository</FormLabel>
                        <Input type="url" value={github} onChange={(e) => setGithub(e.target.value)} />
                    </FormControl>

                    <FormControl id="image">
                        <FormLabel>Project Image</FormLabel>
                        <Input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} />
                    </FormControl>

                    <FormControl id="techStack">
                        <FormLabel>Technology Stack</FormLabel>
                        <Stack direction="row" spacing={2}>
                            {techStack.map((tech, index) => (
                                <Tag key={index} colorScheme="teal">
                                    <TagLabel>{tech}</TagLabel>
                                    <TagCloseButton onClick={() => setTechStack(techStack.filter(t => t !== tech))} />
                                </Tag>
                            ))}
                        </Stack>
                        <Stack direction="row" spacing={2} mt={2}>
                            <Input
                                value={newTech}
                                onChange={(e) => setNewTech(e.target.value)}
                                placeholder="Add a tech"
                            />
                            <Button onClick={handleTechAdd} colorScheme="teal">
                                Add Tech
                            </Button>
                        </Stack>
                    </FormControl>

                    <Button type="submit" colorScheme="teal" size="lg" mt={4} _hover={{ bg: "teal.600" }}>
                        Add Project
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default AddProjectForm;
