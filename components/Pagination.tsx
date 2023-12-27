import { Button } from "./Button";

interface PaginationProps {
  actualPage: number;
  totalPages: number;
  onClickPreviousButton: () => void;
  onClickNextButton: () => void;
}

export function Pagination(props: PaginationProps) {
  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-4 mt-4">
        <Button
          label="Anterior"
          onClick={props.onClickPreviousButton}
          disabled={props.actualPage === 1}
        />
        <p>
          {props.actualPage}/{props.totalPages}
        </p>
        <Button
          label="Próxima"
          onClick={props.onClickNextButton}
          disabled={props.actualPage === props.totalPages}
        />
      </ul>
    </nav>
  );
}
