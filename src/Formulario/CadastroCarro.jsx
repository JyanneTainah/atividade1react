import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

export default function CadastroCarro(props) {
    const [validado, setValidado] = useState(false);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        }

        evento.preventDefault();
        evento.stopPropagation();

    }


    return (
        <>
            <div className="border text-center">
                <h3>Cadastro de Carro</h3>
            </div>
            <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control
                            required
                            id='marca'
                            name='marca'
                            type="text"
                            placeholder="Marca"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type='invalid'>Insira a marca do veículo!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="modelo"
                            name="modelo"
                            placeholder="Modelo"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">Insira o modelo do veículo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Placa</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="placa"
                            name="placa"
                            placeholder="Placa"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">Insira a placa do veículo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Ano de Fabricação</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="ano"
                            name="ano"
                            placeholder="Ano"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">Insira o ano do veículo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Chassi</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="chassi"
                            name="chassi"
                            placeholder="Chassi"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">Insira o chassi do veículo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Renavam</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="renavam"
                            name="renavam"
                            placeholder="Renavam"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">Insira o renavam do veículo</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Tipo de Combustível</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            id="combustivel"
                            name="combustivel"
                            placeholder="Combustivel"
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">Insira o tipo de combustível do veículo</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Cadastrar</Button>
                <Button type="reset">Limpar</Button>
            </Form>
        </>
    );
}