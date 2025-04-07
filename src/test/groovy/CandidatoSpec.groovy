import models.Candidato
import spock.lang.Specification


class CandidatoSpec extends Specification {
    def "Deve adicionar um candidato na lista"() {
        given: "Uma lista vazia de candidatos"
        List<Candidato> candidatos = []

        and: "Um novo candidato"
        Candidato candidato = new Candidato(
                "Alice",
                "alice@email.com",
                "123.456.789-00",
                30,
                "São Paulo",
                "01000-000",
                "Desenvolvedora Java",
                ["Java", "Spring"]
        )

        when: "O candidato é adicionado à lista"
        candidatos.add(candidato)

        then: "A lista deve conter exatamente um candidato"
        candidatos.size() == 1

        and: "O candidato na lista deve ser o mesmo que foi adicionado"
        candidatos[0] == candidato
    }
}
